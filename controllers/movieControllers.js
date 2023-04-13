"use strict"
const MovieDB = require('../models/MovieDB');
var movieDB = new MovieDB();
function getAllMovies(request, respond) {

    movieDB.getAllMovies(function (error, result){

        if (error) {
            respond.json(error);
        } else {

            respond.json(result);
        }
    });
}
module.exports = { getAllMovies };