const knex = require('../knex/moviesKnex');

function getMovies() {
    return knex('movies').select('*');
}

const getMovies = () => knex('movies').select('*');

const getMovie = name => knex('movies').where('title', name).select('movieId');

module.exports = {
    getMovies,
    getMovie,
}