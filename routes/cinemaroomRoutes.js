"use strict"

const CinemaRoomController = require('../controllers/cinemaRoomControllers');
const cinemaroomController = new CinemaRoomController();

class CinemaRoomRoutes{

    cinemaroomRoutes(app) {
        app.route('/room')
        .get(cinemaroomController.getAllCinemaRoom)
        .post(cinemaroomController.addCinemaRoom);

        app.route("/room/:_id")
        .put(cinemaroomController.updateCinemaRoom);
    }

}

module.exports =  CinemaRoomRoutes;