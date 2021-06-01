const movies = require('./api/routes/movies.js');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/movies', movies);

app.get('/', (req, res) => {
    res.send('Server is active.');
});

app.get('/movielist', (req, res) => {
    db.all("SELECT Title FROM movies LIMIT 5", (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        if (rows) {
            rows.forEach((row) => {
                console.log(row.title);
            })
            res.json({rows});
        } else if (!rows) {
            res.send('No movie titles have been found.');
        }
    });
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});

/* Unable to resolve kenx issues */
// Kenx provides better organization like shown below

// const moviesDB = require('./utils/moviesUtility')

/* app.get('/:name', async (req, res) => {
    const movie = await moviesDB.getMovie(req.params.name);
    res.status(200).json({movie});
}); */