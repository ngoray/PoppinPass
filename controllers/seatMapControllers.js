'use strict';
const SeatMapDB = require('../Entity/seatMapDB');
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

  getSomeSM(request, respond) {
    var SMDeets = {
      "roomnumber":request.body.roomnumber
    }

    console.log("getsomeSM called")
    console.log("request.body: " + request.body.roomnumber);
    console.log("SMDeets: " + JSON.stringify(SMDeets));
    console.log("SMDeets: " + SMDeets);
    seatmapDB.getSomeSM(SMDeets,(error,result) => {
      if (error || result.length == 0) {
        respond.json(error);
        console.log("YOU IDIOT");
      } else {
        respond.json(result);
        console.log("YOU WORKED");
      }
    })
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

  deleteSM(request, respond) {

    seatmapDB.deleteSM(request.params._id, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
}

module.exports = SeatMapController;