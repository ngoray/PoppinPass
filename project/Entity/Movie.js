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
        var sql = "INSERT INTO poppinpass.movie (story, buy, video1, thumb, video2, poster, advice, title, cast, director, genre, duration, `release`, availability) VALUES (?, 'lol', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return db.query(sql, [movie.story, movie.video1, movie.thumb, movie.video2, movie.poster, movie.advice, movie.title, movie.cast, movie.director, movie.genre, movie.duration, movie.release, movie.availability], callback)
    }

    addMovie(request, respond) {
        const addDetails = {
            "story":request.body.story,
            "video1":request.body.video1,
            "thumb":request.body.thumb,
            "video2":request.body.video2,
            "poster":request.body.poster,
            "title":request.body.title,
            "advice":request.body.advice,
            "cast":request.body.cast,
            "director":request.body.director,
            "genre":request.body.genre,
            "duration":request.body.duration,
            "release":request.body.release,
            "availability":request.body.availability
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