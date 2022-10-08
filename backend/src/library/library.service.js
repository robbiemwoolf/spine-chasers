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

function search(tag) {
    return knex
        .from('library')
        .whereRaw('? = ANY(tags)', tag)
}

module.exports = {
    list,
    read,
    search
}