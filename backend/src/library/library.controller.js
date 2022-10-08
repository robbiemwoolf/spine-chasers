const e = require('express')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const libraryService = require('./library.service')

async function list(req, res) {
    const data = await libraryService.list()
    res.json({ data })
}

async function create(req, res, next) {
    const data = await libraryService.create(req.body.data)
    res.status(201).json({ data })
}

module.exports = {
    create: [
        asyncErrorBoundary(create)
    ],
    list: [
        asyncErrorBoundary(list)
    ]
}