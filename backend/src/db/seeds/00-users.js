exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('users').insert([
        {
          username: "robbiemwoolf",
          first_name: "Robbie",
          last_name: "Woolf",
          email: "robbiemwoolf@gmail.com",
          password: "P@ssw0rd"
        },
        {
          username: "deviantcamel",
          first_name: "Tia",
          last_name: "Woolf",
          email: "tiaamartinez@hotmail.com",
          password: "pa$3Word"
        },
      ])
    })
}