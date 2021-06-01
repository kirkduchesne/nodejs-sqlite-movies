const knex = require('knex');
const moviesDB = require('../db/movies.db');

const moviesKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: moviesDB,
    },
    useNullAsDefault: true,
})

module.exports = moviesKnex;