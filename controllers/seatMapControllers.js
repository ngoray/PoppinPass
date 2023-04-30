'use strict';
const SeatMapDB = require('../models/seatMapDB');
const seatmapDB = new SeatMapDB();

class SeatMapController {

  addSM(request, respond) {
    const smdata = {
      seatno: request.body.seatno,
      row: request.body.row,
      roomnumber: request.body.roomnumber

    };

    console.log(smdata);

    seatmapDB.addSM(smdata, (error, result) => {
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

  getAllSM(request, respond) {
    seatmapDB.getAllSM((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  updateSM(request, respond) {
    var SMDetails = {
        "_id": parseInt(request.params._id),
        "seatno":request.body.seatno,
        "row" : request.body.roomno,
        "roomnumber" : request.body.roomnumber,
        "availability": request.body.availability
      }

      seatmapDB.updateSM(SMDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(SMDetails);
        }
    });
}
}

module.exports = SeatMapController;