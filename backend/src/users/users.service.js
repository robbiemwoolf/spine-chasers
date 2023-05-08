const knex = require('../db/connection') // requires the knex instance initialized /db/connection.js

// builds a query that selects all columns from the users table
function list() { 
    return knex('users')
        .select('*')
}

function read(userId) {
    return knex('users')
        .select('*')
        .where({ user_id: userId })
        .first()
}

function create(user) {
    return knex('users')
        .insert(user, '*')
        .first()
}

module.exports = {
    create,
    list,
    read,
}