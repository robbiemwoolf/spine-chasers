const e = require('express')
const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const hasProperties = require('../errors/hasProperties')
const usersService = require('./users.service') // requires the service object

const VALID_PROPERTIES = [
    'username',
    'first_name',
    'last_name',
    'email',
    'password'
]

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

const hasRequiredProperties = hasProperties('username', 'email', 'password')

async function userExists(req, res, next) {
    const { userId } = req.params
    const match = usersService.read(userId)
    if (match.length === 0 || !userId)
        return next({ status: 404, message: 'User cannot be found.' })
    res.locals.user = match[0]
    next()
}

async function read(req, res) {
    res.json({ data: res.locals.user })
}

async function list(req, res) {
    const data = await usersService.list()
    res.json({ data })
}

async function create(req, res, next) { // convert to async and include asyncErrorBoundary
    const data = await usersService.create(req.body.data)
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
    ],
    read: [
        asyncErrorBoundary(userExists),
        asyncErrorBoundary(read)
    ]
}