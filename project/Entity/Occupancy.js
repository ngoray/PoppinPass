'use strict';
var db = require('./../../dbconnection');

class Occupancy {

  // add occupancy
  addOccuTable(occupancy, callback){

    var sql = "INSERT INTO poppinpass.occupancy (seatno, `row`) VALUES (?, ?)";
    
    db.query(sql, [occupancy.seatno, occupancy.row], callback);
}
  addOccu(request, respond) {
    const occupancyDetails = {
      seatno: request.body.seatno,
      row: request.body.row
    };

    occupancy.addOccuTable(occupancyDetails, (error, result) => {
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

  // view all occupancy
  viewAllOccuTable(callback) {
    var sql = "SELECT * FROM poppinpass.occupancy";
    return db.query(sql, callback);
}

  viewAllOccu(request, respond) {
    occupancy.viewAllOccuTable((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  // update occupancy
  updateOccuTable(occupancy, callback) {
    var sql = "UPDATE poppinpass.occupancy SET seatno = ?, `row` = ? WHERE _id = ?";

    return db.query(sql, [occupancy.seatno, occupancy.row, occupancy._id], callback);
}

  updateOccu(request, respond) {
    var OccupancyDetails = {
        "_id": parseInt(request.params._id),
        "seatno":request.body.seatno,
        "row":request.body.row
      }

    occupancy.updateOccuTable(OccupancyDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(OccupancyDetails);
        }
    });
}
}
const occupancy = new Occupancy;
module.exports = Occupancy;