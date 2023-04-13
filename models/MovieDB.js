"use strict"
var db = require('../dbconnection');
class MoviesDB {

    getAllMovies(callback) {
        var sql = "SELECT * FROM poppinpass.movie";

        return db.query(sql, callback);
    }
}
module.exports = MoviesDB;