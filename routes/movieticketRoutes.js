"use strict"

const MovieTicket = require('./../project/Entity/MovieTicket');
const movieticket = new MovieTicket();

class MovieTicketRoutes{

    movieticketRoutes(app) {
        app.route('/movieticket')
        .get(movieticket.viewAllMovieTicket)
        .post(movieticket.addMovieTicket);

        app.route("/movieticket/:_id")
        .put(movieticket.updateMovieTicket)
        .delete(movieticket.suspendMovieTicket);
    }

}

module.exports =  MovieTicketRoutes;