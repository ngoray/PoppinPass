'use strict';
const OccupancyDB = require('../models/OccupancyDB');
const occupancyDB = new OccupancyDB();

class OccupancyController {

  addOccu(request, respond) {
    const occudata = {
      seatno: request.body.seatno,
      row: request.body.row

    };

    console.log(occudata);

    occupancyDB.addOccu(occudata, (error, result) => {
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

  getAllOccu(request, respond) {
    occupancyDB.getAllOccu((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  updateOccu(request, respond) {
    var OccuDetails = {
        "_id": parseInt(request.params._id),
        "seatno":request.body.seatno,
        "row":request.body.row
      }

    occupancyDB.updateOccu(OccuDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(OccuDetails);
        }
    });
}
}

module.exports = OccupancyController;