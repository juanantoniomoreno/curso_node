const express = require("express");
const app = express();
const movies = require('./movies.json');
const crypto = require('node:crypto');
const { validateMovie } = require("./schemas/movies");

app.disable("x-powered-by");

app.use(express.json());

// Los recursos que sean MOVIES se identifican con /movies
app.get("/movies", (req, res) => {

    const { genre } = req.query;

    if(genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        );

        if(filteredMovies.length > 0){
            res.json({ filteredMovies});
        }

        res.status(404).json({ message:  `movies with genre ${genre.toUpperCase()} not found`});
    }

    res.json({ movies });    
});

app.get("/movies/:id", (req, res) => { // path-to-regexp
    const { id } = req.params;

    const movie = movies.find(movie => movie.id === id);

    if(movie) {
        res.json(movie);
    }

    res.status(404).json({ message: 'movie-not-found '});
})

app.post('/movies', (req, res) => {

    const result = validateMovie(req.body);

    if(result.error){
        return res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = {
        id: crypto.randomUUID(), // uuid v4
        ...result.data
    }

    // Esto no es REST, porque estamos guardando
    // el estado de la aplicación en memoria
    movies.push(newMovie);

    res.status(201).json(newMovie) //actualizar cache del cliente
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT localhost:" + PORT);
});
