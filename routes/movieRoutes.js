"use strict"

const Movie = require('./../project/Entity/Movie');
const movie = new Movie();

class MovieRoutes{

    movieRoutes(app) {
        app.route('/movies')
        .get(movie.viewAllMovies)
        .post(movie.addMovie);
    
        app.route('/movie/:_id')
        .put(movie.updateMovieStatus);

        app.route('/movies/:_id')
        .put(movie.updateMovie4Manager);
    }

}

module.exports =  MovieRoutes;