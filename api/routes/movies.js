const express = require('express');
const router = express.Router();

let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/movies.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the movies database.');
});

router.get('/', (req, res) => {
    const sql = `SELECT title,
                imdbId, genres,
                releaseDate, budget
                FROM movies LIMIT 50`;
    db.all(sql, (err, movies) => {
        if (err) {
            return console.error(err.message);
        }
        if (movies) {
                res.send(movies);
        } else if (!movies) {
            res.send('No movie titles have been found.');
        }
    });
});

router.get('/:movieId', (req, res) => {
    const sql = `SELECT movieId id,
                title title,
                overview overview
                FROM movies
                WHERE movieId = ?`;
    const movieId = req.params.movieId;
    db.get(sql, [movieId], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        if (row) {
            console.log(row.id, row.title)
            res.status(200).json({'id': row.id, 'title': row.title, 'overview': row.overview});
        } else if (!row) {
            console.log(`No movie found with the id ${movieId}`);
            res.send(`No movie found with the id ${movieId}`);
        }
    });
});

module.exports = router;