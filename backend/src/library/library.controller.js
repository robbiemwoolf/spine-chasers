const axios = require('axios')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const libraryService = require('./library.service')

const VALID_PROPERTIES = [
    "isbn",
    "title",
    "author",
    "description",
    "rating",
    "image_url",
    "tags"
]

function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body;

    const invalidFields = Object.keys(data).filter(
        (field) => !VALID_PROPERTIES.includes(field)
    );

    if (invalidFields.length) {
        return next({
            status: 400,
            message: `Invalid fields(s): ${invalidFields.join(", ")}`
        });
    }
    next();
}

const bookExists = async (req, res, next) => {
    const { isbn } = req.params
    const book = await libraryService.read(isbn)
    if (book) { 
        res.locals.book = book
        return next()
    } 
    next(
        res.status(404).send(`404Error: ISBN-${isbn} does not exist in your library.`)
    )
}

async function updateExisting(req, res) {
    const { isbn, tags } = res.locals.book
    // console.log('updateExisting-isbn: ', isbn)
    const API_KEY = 'AIzaSyCIVNf2NvLN5UwJ0MaddHd0v70V37iexQ4'

    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`)
    const response = data.items[0]
    const bookInfo = response.volumeInfo
    
    const titleAPI = bookInfo.title
    const authorAPI = bookInfo.authors     // author returns as an array of authors
    const descriptionAPI = bookInfo.description.substring(0, 2000) // description has inconsistent format, now held at 1000 characters
    const ratingAPI = bookInfo.averageRating
    const imageAccess = bookInfo.imageLinks
    const image_urlAPI = imageAccess.thumbnail  
    
    const updatedBook = {
        isbn: isbn,
        tags: tags,
        title: titleAPI,
        author: authorAPI,
        description: descriptionAPI,
        rating: ratingAPI,
        image_url: image_urlAPI
    }
    // console.log('updateExisting-updatedBook: ', updatedBook)
    const bookAfterUpdate = await libraryService.update(updatedBook)
    res.status(201).json({ data: bookAfterUpdate })
}

async function updateNew(req, res, next) {
    const { isbn, tags } = req.body
    const API_KEY = 'AIzaSyCIVNf2NvLN5UwJ0MaddHd0v70V37iexQ4'

    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`)
    const response = data.items[0]
    const bookInfo = response.volumeInfo
    
    const titleAPI = bookInfo.title
    const authorAPI = bookInfo.authors     // author returns as an array of authors
    const descriptionAPI = bookInfo.description.substring(0, 2000) // description has inconsistent format, now held to 1000 characters
    const ratingAPI = bookInfo.averageRating
    const imageAccess = bookInfo.imageLinks
    const image_urlAPI = imageAccess.thumbnail 
    
    const updatedBook = {
        isbn: isbn,
        tags: tags,
        title: titleAPI,
        author: authorAPI,
        description: descriptionAPI,
        rating: ratingAPI,
        image_url: image_urlAPI
    }
    // console.log('updateNew-updatedBook: ', updatedBook)
    res.locals.book = updatedBook
    next()
}

async function create(req, res) {
    const book = res.locals.book
    const createdBook = await libraryService.create(book)
        res.status(201).json({ data: createdBook });
}

async function list(req, res) {
    const { tags } = req.query
    let books
    if (tags) {
        books = await libraryService.search(tags)
    } else {
        books = await libraryService.list()
    }  
    res.json({ data: books })
}

async function read(req, res) {
    const book = res.locals.book
    res.json({ data: book })
}

async function destroy(req, res) {
    const { book } = res.locals;
    await libraryService.delete(book.isbn);
    res.sendStatus(204);
}

module.exports = {
    create: [
        asyncErrorBoundary(hasOnlyValidProperties),
        asyncErrorBoundary(updateNew),
        asyncErrorBoundary(create)
    ],
    delete: [
        asyncErrorBoundary(bookExists),
        asyncErrorBoundary(destroy)
    ],
    list: [
        asyncErrorBoundary(list)
    ],
    read: [
        asyncErrorBoundary(bookExists),
        asyncErrorBoundary(read),
    ],
    update: [
        asyncErrorBoundary(bookExists),
        asyncErrorBoundary(updateExisting)
    ]
}