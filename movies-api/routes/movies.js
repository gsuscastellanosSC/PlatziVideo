/* eslint-disable func-names */
const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get("/", async function (req, res, next){
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data:movies,
                message: 'movies listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.get("/:movieId", async function (req, res, next){
        const { movieId } = req.param;
        try {
            const movies = await moviesService.getMovie({ movieId });

            res.status(200).json({
                data:movies,
                message: 'movie retrieved'
            });
        } catch (err) {
            next(err);
        }
    });


    router.post("/", async function (req, res, next){
        const { body: movie } = req;
        try {
            const CreateMovieId = await moviesService.createMovie({ movie });
 
            res.status(201).json({
                data:CreateMovieId,
                message: 'movies created'
            });
        } catch (err) {
            next(err);
        }
    });
    
   
     router.put("/:movieId", async function (req, res, next){
        const { movieId } = req.param;
        const { body: movie } = req;
        try {
            const UpdateMovieId = await moviesService.updatedMovie({ movieId, movie });
 
            res.status(201).json({
                data:UpdateMovieId,
                message: 'movie update'
            });
        } catch (err) {
            next(err);
        }
    });

    router.delete("/:movieId", async function (req, res, next){
        const { movieId } = req.param;
        try {
            const deletemovieId = await moviesService.deleteMovie({ movieId });

            res.status(200).json({
                data:deletemovieId,
                message: 'movie deleted'
            });
        } catch (err) {
            next(err);
        }
    });
}
module.exports = moviesApi;