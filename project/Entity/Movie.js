"use strict"
var db = require('./../../dbconnection');
class Movie {
    // Get all Movies
    viewAllMoviesTable(callback) {
        var sql = "SELECT * FROM poppinpass.movie";

        return db.query(sql, callback);
    }

    viewAllMovies(request, respond) {
        movie.viewAllMoviesTable(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }
    updateMovie4ManagerTable(movie, callback) {
        var sql = "UPDATE poppinpass.movie SET title = ?, story = ?, poster = ?, `availability` = ?, `advice` = ?, `genre` = ?, `release` = ?, `director` = ?, duration = ?, video1 = ? ,`video2` = ?, `cast` = ? WHERE _id = ?";

        return db.query(sql, [movie.title, movie.story, movie.poster , movie.availability, movie.advice, movie.genre, movie.release,movie.director,movie.duration, movie.video1,movie.video2,movie.cast, movie._id], callback)
    }

    updateMovie4Manager(request, respond){
        const movieDetails = {
            "_id": parseInt(request.params._id),
            "title": request.body.title,
            "story":request.body.story,
            "poster":request.body.poster,
           "availability": request.body.availability,
            "advice": request.body.advice,
            "genre": request.body.genre,
            "release":request.body.release,
            "director":request.body.director,
            "duration":request.body.duration,
            "video1":request.body.video1,
            "video2":request.body.video2,
            "cast":request.body.cast 

        };

        movie.updateMovie4ManagerTable(movieDetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
                console.log(movieDetails);
            }
        });
    }

    // Update Specific Movie
    updateMovieTable(movie, callback){
        var sql = "UPDATE poppinpass.movie SET availability = ? WHERE _id = ?";
        return db.query(sql, [movie.availability, movie._id], callback);
    }

    updateMovieStatus(request, respond) {
        const movieDetails = {
            "_id": parseInt(request.params._id),
            "availability": request.body.availability
        };
        movie.updateMovieTable(movieDetails, function(error, result){
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
    addMovieTable(movie, callback){
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
        movie.addMovieTable(addDetails, function(error, result){
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