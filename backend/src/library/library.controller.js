const e = require('express')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const hasProperties = require('../errors/hasProperties')
const libraryService = require('./library.service')

function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body    

    const invalidFields = Object.keys(data).filter((field) => !VALID_PROPERTIES.includes(field))

    if (invalidFields.length) {
        return next({
            status: 400,
            message: `Invalid fields(s): ${invalidFields.join(', ')}`,
        })
    }
    next()
}

const hasRequiredProperties = hasProperties('isbn')

async function list(req, res) {
    const data = await libraryService.list()
    res.json({ data })
}

async function create(req, res, next) { // convert to async and include asyncErrorBoundary
    const data = await libraryService.create(req.body.data)
    res.status(201).json({ data })
}

module.exports = {
    create: [
        hasOnlyValidProperties,
        hasRequiredProperties,
        asyncErrorBoundary(create)
    ],
    list: [
        asyncErrorBoundary(list)
    ]
}