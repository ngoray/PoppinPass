"use strict"
var db = require('./../../dbconnection');
class Movie {
    // Get all Movies
    viewAllMoviesDB(callback) {
        var sql = "SELECT * FROM poppinpass.movie";

        return db.query(sql, callback);
    }

    viewAllMovies(request, respond) {
        movie.viewAllMoviesDB(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    // Update Specific Movie
    updateMovieDB(movie, callback){
        var sql = "UPDATE poppinpass.movie SET thumb = ?, poster = ? WHERE _id = ?";
        return db.query(sql, [movie.thumb, movie.poster, movie._id], callback);
    }

    updateMovie(request, respond) {
        const movieDetails = {
            "_id": parseInt(request.params._id),
            "thumb": request.body.thumb,
            "poster": request.body.poster
        };
        movie.updateMovieDB(movieDetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
                console.log(movieDetails);
            }
        });
    }

    // add Movies
    addMovieDB(movie, callback){
        var sql = "INSERT INTO poppinpass.movie (story, buy, video1, thumb, video2, poster, advice, title, cast, director, genre, duration, `release`, availability) VALUES ('lol', 'lol', 'lol', 'lol', 'lol', 'lol', ?, ?, 'lol', 'lol', ?, ?, 'lol', 'lol')";
        return db.query(sql, [movie.advice, movie.title, movie.genre, movie.duration], callback)
    }

    addMovie(request, respond) {
        const addDetails = {
            "title":request.body.title,
            "advice":request.body.advice,
            "genre":request.body.genre,
            "duration":request.body.duration
        };
        movie.addMovieDB(addDetails, function(error, result){
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
const movie = new Movie;
module.exports = Movie;