"use strict";

const MovieDB = require('../models/MovieDB');
const movieDB = new MovieDB();

class MovieController {

    getAllMovies(request, respond) {
        movieDB.getAllMovies(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    updateMovie(request, respond) {
        const movieDetails = {
            "_id": parseInt(request.params._id),
            "thumb": request.body.thumb,
            "poster": request.body.poster
        };
        movieDB.updateMovie(movieDetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
                console.log(movieDetails);
            }
        });
    }
}

module.exports = MovieController;
