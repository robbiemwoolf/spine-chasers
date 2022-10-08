const e = require('express')
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
    const data = await libraryService.list()
    res.json({ data })
}

async function read(req, res) {
    const book = res.locals.book
    res.json({ data: book })
}

module.exports = {
    list: [
        asyncErrorBoundary(list)
    ],
    read: [
        asyncErrorBoundary(bookExists),
        asyncErrorBoundary(read)
    ]
}