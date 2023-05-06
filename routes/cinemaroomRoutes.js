"use strict"

const CinemaRoom = require('./../project/Entity/CinemaRoom');
const cinemaroom = new CinemaRoom();
class CinemaRoomRoutes{

    cinemaroomRoutes(app) {
        app.route('/room')
        .get(cinemaroom.viewAllCinemaRoom)
        .post(cinemaroom.addCinemaRoom);

        app.route("/room/:_id")
        .put(cinemaroom.updateCinemaRoom);
    }

}

module.exports =  CinemaRoomRoutes;