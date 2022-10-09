const e = require('express')
const axios = require('axios')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const libraryService = require('./library.service')

const bookExists = async (req, res, next) => {
    const { book_id } = req.params
    const book = await libraryService.read(book_id)
    if (book) {
        res.locals.book = book
        return next()
    }
    next({
        status: 404,
        message: `Book_id ${book_id} does not exist.`
    })
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

async function apiBook() {
    const API_KEY = 'AIzaSyCIVNf2NvLN5UwJ0MaddHd0v70V37iexQ4'

    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${API_KEY}`)
    const response = data.items[0]
    const bookInfo = response.volumeInfo
    
    const title = bookInfo.title
    console.log(title)
    // author returns as an array of authors
    const author = bookInfo.authors
    // description has inconsistent format
    const description = bookInfo.description
    const rating = bookInfo.averageRating
    const imageAccess = bookInfo.imageLinks
    const image_url = imageAccess.thumbnail       
}

apiBook()

module.exports = {
    list: [
        asyncErrorBoundary(list)
    ],
    read: [
        asyncErrorBoundary(bookExists),
        asyncErrorBoundary(read)
    ]
}