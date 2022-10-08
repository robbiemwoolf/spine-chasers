const router = require('express').Router()
const controller = require('./library.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route('/:book_id')
    .get(controller.read)
    .all(methodNotAllowed)

router
    .route('/')
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router