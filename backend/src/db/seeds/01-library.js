const books = require('../fixtures/books.js')

exports.seed = function (knex) {
    return knex
      .raw('TRUNCATE TABLE library RESTART IDENTITY CASCADE')
      .then(function () {
        return knex('library').insert(books)
      })
}