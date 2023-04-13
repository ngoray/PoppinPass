"use strict"

const movieController = require('../controllers/movieControllers');



function movieRoutes(app) {
    app.route('/movies')
    .get(movieController.getAllMovies);
}

module.exports = { movieRoutes };