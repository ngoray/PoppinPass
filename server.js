"use strict"

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var host = "127.0.0.1";
var port = 3232;
var home_file = "/index.html";

app.use(express.static('./project'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const  CustomerRoutes = require('./routes/customerRoutes.js');
const  customerRoutes = new  CustomerRoutes();
customerRoutes.routeMember(app);

const routeMovies = require('./routes/movieRoutes.js');
const  routemovies = new  routeMovies();
routemovies.movieRoutes(app);

const StaffRoutes = require('./routes/staffRoutes.js');
const StaffRoute = new StaffRoutes();
StaffRoute.StaffRoute(app);

const routeReviews = require('./routes/reviewRoutes.js');
const routeReview = new routeReviews();
routeReview.routereview(app);

function gotoIndex(f, request, respond) {
    respond.sendFile(__dirname + f);
}

app.get(home_file, gotoIndex);

// Starts the Web Server
var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});