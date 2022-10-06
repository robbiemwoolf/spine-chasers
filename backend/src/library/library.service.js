const knex = require('../db/connection')

function list() { 
    return knex('library')
        .select('*')
}

function create(book) {
    return knex('library')
        .insert(book, '*')
        .first()
}

module.exports = {
    create,
    list
}