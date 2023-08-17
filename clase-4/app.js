import express, { json } from "express";
import { moviesRouter } from "./routes/movies.js";
import { corsMiddleware } from "./middlewares/cors.js";

//Leer JSON en ESModules
// import fs from 'node:fs';
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));

//Leer JSON en ESModules RECOMENDADO
// import { createRequire } from "node:module";
// const require = createRequire(import.meta.url);
// const movies = require('./movies.json');

const app = express();
app.use(json());

app.use(corsMiddleware());

app.disable("x-powered-by");

app.use('/movies', moviesRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT localhost:" + PORT);
});
