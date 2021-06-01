const express = require('express');
const moviesDB = require('./utils/moviesUtility')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is active.');
});

app.get('/movies', async (req, res) => {
    const movies = await moviesDB.getMovies();
    res.status(200).json({movies});
});

app.get('/:name', async (req, res) => {
    const movie = await moviesDB.getMovie(req.params.name);
    res.status(200).json({movie});
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});