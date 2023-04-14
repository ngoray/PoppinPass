"use strict"

const movieController = require('../controllers/movieControllers');



function movieRoutes(app) {
    app.route('/movies')
    .get(movieController.getAllMovies);

    app.route('/movies/:_id')
    .put(movieController.updateMovie);
}

module.exports = { movieRoutes };