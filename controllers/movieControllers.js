"use strict";

const MovieDB = require('../entity/Movie');
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

    addMovie(request, respond) {
        const addDetails = {
            "title":request.body.title,
            "advice":request.body.advice,
            "genre":request.body.genre,
            "duration":request.body.duration
        };
        movieDB.addMovie(addDetails, function(error, result){
            console.log(result);

      if (error) {
        respond.json({
          message: 'Something went wrong',
          error,
        });
      } else {
        respond.json(result);
      }
    
        });

    }
}

module.exports = MovieController;
