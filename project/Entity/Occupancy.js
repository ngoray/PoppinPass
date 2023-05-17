'use strict';
var db = require('./../../dbconnection');

class Occupancy {

  // add occupancy
  addOccu(request, respond) {
    const occupancyDetails = {
      seatno: request.body.seatno,
      row: request.body.row
    };
  
    var sql = "INSERT INTO poppinpass.occupancy (seatno, `row`) VALUES (?, ?)";
    
    db.query(sql, [occupancyDetails.seatno, occupancyDetails.row], function(error, result) {
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
  viewAllOccu(request, respond) {
    var sql = "SELECT * FROM poppinpass.occupancy";
  
    db.query(sql, function(error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  

  // update occupancy
  updateOccu(request, respond) {
    var OccupancyDetails = {
      "_id": parseInt(request.params._id),
      "seatno": request.body.seatno,
      "row": request.body.row
    };
  
    var sql = "UPDATE poppinpass.occupancy SET seatno = ?, `row` = ? WHERE _id = ?";
  
    db.query(sql, [OccupancyDetails.seatno, OccupancyDetails.row, OccupancyDetails._id], function(error, result) {
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