"use strict"

const Movie = require('./../project/Entity/Movie');
const movie = new Movie();

class MovieRoutes{

    movieRoutes(app) {
        app.route('/movies')
        .get(movie.viewAllMovies)
        .post(movie.addMovie);
    
        app.route('/movie/:_id')
        .put(movie.suspendMovieStatus);

        app.route('/movies/:_id')
        .put(movie.updateMovie4Manager);

        app.route('/searchmovie')
        .post(movie.searchMovie);
    }

}

module.exports =  MovieRoutes;