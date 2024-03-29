const knex = require('../db/connection')

function create(book) {
    return knex('library')
        .insert({
            isbn: book.isbn,
            title: book.title,
            author: book.author,
            rating: book.rating,
            image_url: book.image_url,
            description: book.description,
            tags: book.tags
        })
        .returning('*')
}

function destroy(isbn) {
    return knex('library')
        .select('*')
        .where({ isbn })
        .del();
}

function list() { 
    return knex('library')
        .whereNotNull('title')
        .select('*')
}

function read(isbn) {
    return knex('library')
        .select('*')
        .where({ isbn })
        .first()
}

function search(tag) {
    return knex
        .from('library')
        .whereRaw('? = ANY(tags)', tag)
        .whereNotNull('title')
}

function update(updatedBook) {
    const b = updatedBook

    return knex('library')
        .where('isbn', b.isbn)
        .update({
            title: b.title,
            author: b.author,
            rating: b.rating,
            image_url: b.image_url,
            description: b.description,
            tags: b.tags
        })
        .returning('*')
}

module.exports = {
    create,
    delete: destroy,
    list,
    read,
    search,
    update
}