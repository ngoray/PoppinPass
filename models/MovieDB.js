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
}
module.exports = MoviesDB;