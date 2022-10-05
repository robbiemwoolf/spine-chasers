exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => { // create user table
        table.increments('user_id').primary() // each user is given a unique user_id
        table.string('username').unique().notNullable() // every user has to provide a unique username
        table.string('first_name').notNullable() // must provide a first name
        table.string('last_name') // last name isn't required but it is available as an option
        table.string('email').unique().notNullable() // every user has to provide a unique email
        table.string('password').notNullable() // must provide password
        table.integer('library_total').defaultTo(0) // total number of books in user's library
        table.integer('read_total').defaultTo(0) // how many books (excluding comics) has the user read and rated
        table.integer('read_comics_total').defaultTo(0) // total comics read by user, comics is a category that includes comics, trade paperbacks, graphic novels, and manga
        table.integer('token_total').defaultTo(0) // total tokens has the user earned
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}