const path = require("path")
require('dotenv').config()
const { 
    DATABASE_URL = 'postgresql://postgres@localhost/postgres',
    DATABASE_URL_TEST = "postgresql://postgres@localhost/postgres",
    DATABASE_URL_DEVELOPMENT = "postgresql://postgres@localhost/postgres",
    DATABASE_URL_PREVIEW = "postgresql://postgres@localhost/postgres"
} = process.env

module.exports = {
  development: {
    client: 'postgresql',
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    }
  },

  preview: {
    client: 'postgresql',
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
  },
  
  test: {
    client: 'postgresql',
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds')
    },
    useNullAsDefault: true,
  },
}