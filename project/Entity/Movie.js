"use strict"
var db = require('./../../dbconnection');
class Movie {
    // Get all Movies
    viewAllMovies(request, respond) {
        var sql = "SELECT * FROM poppinpass.movie";
      
        db.query(sql, function(error, result) {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }
      
    updateMovie4Manager(request, respond) {
        const movieDetails = {
          _id: parseInt(request.params._id),
          title: request.body.title,
          story: request.body.story,
          poster: request.body.poster,
          availability: request.body.availability,
          advice: request.body.advice,
          genre: request.body.genre,
          release: request.body.release,
          director: request.body.director,
          duration: request.body.duration,
          video1: request.body.video1,
          video2: request.body.video2,
          cast: request.body.cast
        };
      
        var sql = "UPDATE poppinpass.movie SET title = ?, story = ?, poster = ?, availability = ?, advice = ?, genre = ?, `release` = ?, director = ?, duration = ?, video1 = ?, video2 = ?, cast = ? WHERE _id = ?";
      
        db.query(sql, [
          movieDetails.title,
          movieDetails.story,
          movieDetails.poster,
          movieDetails.availability,
          movieDetails.advice,
          movieDetails.genre,
          movieDetails.release,
          movieDetails.director,
          movieDetails.duration,
          movieDetails.video1,
          movieDetails.video2,
          movieDetails.cast,
          movieDetails._id
        ], function(error, result) {
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
    updateMovieStatus(request, respond) {
        const movieDetails = {
          _id: parseInt(request.params._id),
          availability: request.body.availability
        };
      
        var sql = "UPDATE poppinpass.movie SET availability = ? WHERE _id = ?";
      
        db.query(sql, [movieDetails.availability, movieDetails._id], function(error, result) {
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
    addMovie(request, respond) {
        const addDetails = {
          story: request.body.story,
          video1: request.body.video1,
          thumb: request.body.thumb,
          video2: request.body.video2,
          poster: request.body.poster,
          title: request.body.title,
          advice: request.body.advice,
          cast: request.body.cast,
          director: request.body.director,
          genre: request.body.genre,
          duration: request.body.duration,
          release: request.body.release,
          availability: request.body.availability
        };
      
        var sql = "INSERT INTO poppinpass.movie (story, buy, video1, thumb, video2, poster, advice, title, cast, director, genre, duration, `release`, availability) VALUES (?, 'lol', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      
        db.query(sql, [addDetails.story, addDetails.video1, addDetails.thumb, addDetails.video2, addDetails.poster, addDetails.advice, addDetails.title, addDetails.cast, addDetails.director, addDetails.genre, addDetails.duration, addDetails.release, addDetails.availability], function(error, result) {
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