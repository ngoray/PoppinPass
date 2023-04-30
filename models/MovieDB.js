"use strict"
var db = require('../dbconnection');
class MoviesDB {

    getAllMovies(callback) {
        var sql = "SELECT * FROM poppinpass.movie";

        return db.query(sql, callback);
    }

    updateMovie(movie, callback){
        var sql = "UPDATE poppinpass.movie SET thumb = ?, poster = ? WHERE _id = ?";
        return db.query(sql, [movie.thumb, movie.poster, movie._id], callback);
    }

    addMovie(movie, callback){
        var sql = "INSERT INTO poppinpass.movie (story, buy, video1, thumb, video2, poster, advice, title, cast, director, genre, duration, `release`, availability) VALUES ('lol', 'lol', 'lol', 'lol', 'lol', 'lol', ?, ?, 'lol', 'lol', ?, ?, 'lol', 'lol')";
        return db.query(sql, [movie.advice, movie.title, movie.genre, movie.duration], callback)
    }

    
}
module.exports = MoviesDB;