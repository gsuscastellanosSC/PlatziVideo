/* eslint-disable func-names */
const express = require('express');
const { moviesMock } = require('../utils/mockps/movies');

function moviesApi(app){
    const router = express.Router();
    app.use('/api/movies', router);

    router.get("/", async function (req, res, next){
        try {
            const movies = await Promise.resolve(moviesMock);

            res.status(200).json({
                data:movies,
                message: 'movies listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.post("/", async function (req, res, next){
        try {
            const CreateMovieId = await Promise.resolve(moviesMock[0].id);
 
            res.status(201).json({
                data:CreateMovieId,
                message: 'movies created'
            });
        } catch (err) {
            next(err);
        }
    });
    
    router.get("/:movieId", async function (req, res, next){
        try {
            const movies = await Promise.resolve(moviesMock[0]);

            res.status(200).json({
                data:movies,
                message: 'movie retrieved'
            });
        } catch (err) {
            next(err);
        }
    });

     router.put("/:movieId", async function (req, res, next){
        try {
            const UpdateMovieId = await Promise.resolve(moviesMock[0].id);
 
            res.status(201).json({
                data:UpdateMovieId,
                message: 'movie update'
            });
        } catch (err) {
            next(err);
        }
    });

    router.delete("/:movieId", async function (req, res, next){
        try {
            const deletemovieId = await Promise.resolve(moviesMock[0].id);

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