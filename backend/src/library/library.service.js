const knex = require('../db/connection')

function list() { 
    return knex('library')
        .select('*')
}

function create(book) {
    return knex('library')
        .insert(book, '*')
        .then((createdBooks) => createdBooks[0])
}

module.exports = {
    create,
    list
}