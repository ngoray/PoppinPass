'use strict';
const CinemaRoomDB = require('../models/CinemaRoomDB');
const cinemaroomDB = new CinemaRoomDB();

class CinemaroomController {

  addCinemaRoom(request, respond) {
    const cinemaroomdata = {
      roomnumber: request.body.roomnumber,

    };

    console.log(cinemaroomdata);

    cinemaroomDB.addCinemaRoom(cinemaroomdata, (error, result) => {
      console.log(result);

      if (error) {
        respond.json({
          message: 'Something went wrong',
          error,
        });
      } else {
        respond.json(result);
      }
    });
  }

  getAllCinemaRoom(request, respond) {
    cinemaroomDB.getAllCinemaRoom((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  updateCinemaRoom(request, respond) {
    var CinemaRoomDetails = {
        "_id": parseInt(request.params._id),
        "room number":request.body.roomnumber,
      }

      cinemaroomDB.updateCinemaRoom(CinemaRoomDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(CinemaRoomDetails);
        }
    });
}
}

module.exports = CinemaroomController;