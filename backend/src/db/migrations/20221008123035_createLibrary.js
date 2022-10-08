exports.up = function(knex) {
    return knex.schema.createTable('library', (table) => {
        table.increments('book_id').primary()
        table.bigint('isbn').unique().notNullable()
        table.string('title')
        table.string('author')
        table.string('image_url')
        table.string('description')
        table.integer('rating')
        table.specificType('tags', 'text[]')
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('library')
}