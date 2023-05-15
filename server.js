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

const routeMovies = require('./routes/movieRoutes.js');
const  routemovies = new  routeMovies();
routemovies.movieRoutes(app);

const routeReviews = require('./routes/reviewRoutes.js');
const routeReview = new routeReviews();
routeReview.routereview(app);

const routeOccupancys = require('./routes/occupancyRoutes.js');
const routeOccupancy = new routeOccupancys();
routeOccupancy.occupancyRoutes(app);

const routeCinemaRoom = require('./routes/cinemaroomRoutes.js');
const routeCinemaroom = new routeCinemaRoom();
routeCinemaroom.cinemaroomRoutes(app);

const routeSM = require('./routes/seatmapRoutes.js');
const routesm = new routeSM();
routesm.smRoutes(app);

const routeMenu = require('./routes/menuRoutes.js');
const routemenu = new routeMenu();
routemenu.menuRoutes(app);

const routeProfile = require('./routes/userprofileRoutes.js');
const routeprofile = new routeProfile();
routeprofile.userprofileRoutes(app);

const routeScreenTime = require('./routes/screentimeRoutes.js');
const routescreentime = new routeScreenTime();
routescreentime.screentimeRoutes(app);

const routeMovieTicket = require('./routes/movieticketRoutes.js');
const routemovieticket = new routeMovieTicket();
routemovieticket.movieticketRoutes(app);

const routeUserAccount = require('./routes/useraccountRoutes.js');
const routeuseraccount = new routeUserAccount();
routeuseraccount.useraccountRoutes(app);

const routeTransactionHistory = require('./routes/transactionhistoryRoutes.js');
const routetransactionhistory = new routeTransactionHistory();
routetransactionhistory.HistoryRoute(app);


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