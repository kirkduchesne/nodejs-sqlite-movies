const knex = require('knex');
// const moviesDB = require('../db/movies.db');

const moviesKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: '../db/movies.db',
    },
    useNullAsDefault: true,
})

module.exports = moviesKnex;