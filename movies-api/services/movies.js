/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
const { moviesMock } = require('../utils/mockps/movies');

class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
}

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0]);
        return movie || {};
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMock[0].id);
        return createMovieId; 
    }

    async updatedMovie() {
        const updatedMovieId = await Promise.resolve(moviesMock[0].id);
        return updatedMovieId; 
    }

    async deleteMovie() {
        const deleteMovieId = await Promise.resolve(moviesMock[0].id);
        return deleteMovieId; 
    }
}

module.exports = MoviesService;