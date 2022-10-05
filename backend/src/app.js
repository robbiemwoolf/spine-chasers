const morgan = require('morgan') // small logging package that will print useful info to terminal window on each request
const express = require('express')
const cors = require('cors')

const usersRouter = require('./users/users.router')
const libraryRouter = require('./library/library.router')
const notFound = require('./errors/notFound')
const errorHandler = require('./errors/errorHandler')

const app = express()

app.use(morgan('dev')) // The return value of the function is middleware, configured by the "dev" string.

app.use(cors())
app.use(express.json())

app.use('/library', libraryRouter)
app.use('/api/users', usersRouter)

// Not found handler
app.use(notFound)
  
// Error handler
app.use(errorHandler)

module.exports = app