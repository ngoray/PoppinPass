"use strict"

const MovieController = require('../controllers/movieControllers');
const movieController = new MovieController();

class MovieRoutes{

    movieRoutes(app) {
        app.route('/movies')
        .get(movieController.getAllMovies);
    
        app.route('/movies/:_id')
        .put(movieController.updateMovie);
    }

}

module.exports =  MovieRoutes;