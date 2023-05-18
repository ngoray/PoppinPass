'use strict';
var db = require('./../../dbconnection');

class ScreenTime {

  searchScreenTime(request, respond) {

    const searchDetails = {
      search: request.body.search
    };

    var sql = "SELECT * FROM poppinpass.screentime WHERE title LIKE ?;";
  
    db.query(sql, [searchDetails.search], function (error, result) {
      console.log("result: " + result);
  
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  // add screentime
  addScreenTime(request, respond) {
    const screentimeDetails = {
      day: request.body.day,
      time: request.body.time,
      title:request.body.title,
      roomnum:request.body.roomnumber
    };
  
    var sql = "INSERT INTO poppinpass.screentime (day, time, roomnumber, title) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [screentimeDetails.day, screentimeDetails.time, screentimeDetails.roomnum, screentimeDetails.title], function(error, result) {
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
  

  // view all screen time
  viewAllScreenTime(request, respond) {
    var sql = "SELECT * FROM poppinpass.screentime";
  
    db.query(sql, function(error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  

  viewCertainScreenTime(request, respond) {
    console.log("screentime_" + request.body.movietitle);
    const stDetails = {
      movietitle: request.body.movietitle
    };
  
    var sql = "SELECT * FROM poppinpass.screentime WHERE title = ?";
  
    db.query(sql, [stDetails.movietitle], function(error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  
  
  // update screen time
  updateScreenTime(request, respond) {
  
    var ScreenTimeDetails = {
      "_id": parseInt(request.params._id),
      "day": request.body.day,
      "time": request.body.time,
      "title":request.body.title,
      "roomnum":request.body.roomnumber
    }
    console.log(ScreenTimeDetails);
  
    var sql = "UPDATE poppinpass.screentime SET day = ?, time = ?, title = ?, roomnumber = ? WHERE _id = ?";
  
    db.query(sql, [ScreenTimeDetails.day, ScreenTimeDetails.time, ScreenTimeDetails.title, ScreenTimeDetails.roomnum, ScreenTimeDetails._id], function(error, result) {
      if (error) {
        respond.json(error);
        console.log(error);
      } else {
        respond.json(result);
      }
    });
  }
  

suspendScreenTime(request, respond) {
  var ScreenTimeDetails = {
    "_id": parseInt(request.params._id),
  }

  var sql = "DELETE FROM poppinpass.screentime WHERE _id = ?";

  db.query(sql, [ScreenTimeDetails._id], function(error, result) {
    if (error) {
      respond.json(error);
      console.log(error);
    } else {
      respond.json(result);
    }
  });
}


}
const screentime = new ScreenTime;
module.exports = ScreenTime;