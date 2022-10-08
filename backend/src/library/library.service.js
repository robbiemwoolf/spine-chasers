const knex = require('../db/connection')

function list() { 
    return knex('library')
        .select('*')
}

function read(book_id) {
    return knex('library')
        .where({ book_id })
        .first()
}

module.exports = {
    list,
    read,
}