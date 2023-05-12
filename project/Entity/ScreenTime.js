'use strict';
var db = require('./../../dbconnection');

class ScreenTime {

  // add screentime
  addScreenTimeTable(screentime, callback){

    var sql = "INSERT INTO poppinpass.screentime (day, time) VALUES (?, ?)";
    
    db.query(sql, [screentime.day, screentime.time], callback);
}
  addScreenTime(request, respond) {
    const screentimeDetails = {
      day: request.body.day,
      time: request.body.time
    };

    screentime.addScreenTimeTable(screentimeDetails, (error, result) => {
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
  viewAllScreenTimeTable(callback) {
    var sql = "SELECT * FROM poppinpass.screentime";
    return db.query(sql, callback);
}

  viewAllScreenTime(request, respond) {
    screentime.viewAllScreenTimeTable((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  // update screen time
  updateScreenTimeTable(screentime, callback) {
    var sql = "UPDATE poppinpass.screentime SET day = ?, time = ? WHERE _id = ?";

    return db.query(sql, [screentime.day, screentime.time, screentime._id], callback);
}

  updateScreenTime(request, respond) {
    var ScreenTimeDetails = {
        "_id": parseInt(request.params._id),
        "day":request.body.day,
        "time":request.body.time
      }

    screentime.updateScreenTimeTable(ScreenTimeDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
        }
    });
}

  suspendScreenTimeTable(screentime, callback) {
    var sql = "DELETE FROM poppinpass.screentime WHERE _id = ?";

    return db.query(sql, [screentime._id], callback);
  }

  suspendScreenTime(request, respond) {
    var ScreenTimeDetails = {
        "_id": parseInt(request.params._id),
      }

    screentime.suspendScreenTimeTable(ScreenTimeDetails, function(error, result){
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