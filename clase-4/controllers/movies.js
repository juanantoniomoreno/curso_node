import { MovieModel } from "../models/movie.js";
import { validateMovie, validatePartialMovie } from "../schemas/movies.js";

export class MovieController {

    static async getAll (req, res) {

        const { genre } = req.query;
    
        const movies = await MovieModel.getAll({ genre });
    
        res.json({ movies }); 
    }

    static async getById(req, res)  { // path-to-regexp
        const { id } = req.params;
    
        const movie = await MovieModel.getById({ id });
    
        if(movie) {
            res.json(movie);
        }
    
        res.status(404).json({ message: 'movie-not-found '});
    }

    static async create(req, res) {

        const result = validateMovie(req.body);
    
        if(!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message) });
        }
    
        const newMovie = await MovieModel.create({ input: result.data });
    
        res.status(201).json(newMovie) //actualizar cache del cliente
    } 

    static async delete(req, res) {

        //  const origin = req.header('origin');
    
        // if(ACCEPTED_ORIGINS.includes(origin) || !origin ){
        //     res.header('Access-Control-Allow-Origin', origin );
        // }
    
        const {id} = req.params;
        const result = await MovieModel.delete({ id });
    
        if(!result){
            return res.status(404).json({ message: 'movie-not-found' })
        }    
    
        return res.json({ message: 'movie-deleted'});
    }

    static async update(req, res) {

        const result = validatePartialMovie(req.body);
        
        if(!result.success){
            return res.status(400).json({ error: JSON.parse(result.error.message)});
        }
        
        const { id } = req.params;
    
        const updateMovie = await MovieModel.update({ id, input: result.data });
    
        return res.json(updateMovie);
    }
}