exports.up = function(knex) {
    return knex.schema.createTable('library', (table) => {
        table.increments('book_id').primary()
        table.bigint('isbn').unique().notNullable()
        table.string('title')
        table.string('author')
        table.string('image_url')
        table.string('description', 2000) // string length defaults to 255
        table.decimal('rating', null) // specifying null allows for numbers of any precision and scale
        table.specificType('tags', 'text[]')
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('library')
}