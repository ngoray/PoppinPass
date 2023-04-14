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

function updateMovie(request, respond) {
    var movieDetails = {
        "_id": parseInt(request.params._id),
        "thumb": request.body.thumb,
        "poster": request.body.poster
        
    }
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

module.exports = { getAllMovies, updateMovie };