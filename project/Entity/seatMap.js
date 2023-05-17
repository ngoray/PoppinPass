var db = require('./../../dbconnection');

class Seatmap {

  addSM(request, respond) {
    const smdata = {
      seatno: request.body.seatno,
      row: request.body.row,
      roomnumber: request.body.roomnumber
    };
  
    var sql = "INSERT INTO poppinpass.seatmap (seatno, `row`, roomnumber, avaliability) VALUES (?, ?, ?, 'active')";
  
    db.query(sql, [smdata.seatno, smdata.row, smdata.roomnumber], function(error, result) {
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
  

    viewAllSM(request, respond) {
        var sql = "SELECT * FROM poppinpass.seatmap";
        
        db.query(sql, function(error, result) {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }
      

      updateSM(request, respond) {
        var smId = parseInt(request.params._id);
        var smDetails = {
          seatno: request.body.seatno,
          row: request.body.row,
          roomnumber: request.body.roomnumber,
          availability: request.body.availability,
          _id: smId
        };
      
        var sql = "UPDATE poppinpass.seatmap SET seatno = ?, `row` = ?, roomnumber = ?, `avaliability` = ? WHERE _id = ?";
      
        db.query(sql, [smDetails.seatno, smDetails.row, smDetails.roomnumber, smDetails.availability, smDetails._id], function(error, result) {
          if (error) {
            respond.json(error);
            console.log(error);
          } else {
            respond.json(result);
            console.log(smDetails);
          }
        });
      }
      

    deleteSM(request, respond) {
        var smId = request.params._id;
      
        var sql = "DELETE FROM poppinpass.seatmap WHERE _id = ?";
      
        db.query(sql, smId, function(error, result) {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }
      

    getSomeSM(request, respond) {
      var SMDeets = {
        "roomnumber": request.body.roomnumber
      }
    
      var sql = "SELECT * FROM poppinpass.seatmap WHERE roomnumber = ?";
    
      db.query(sql, [SMDeets.roomnumber], function(error, result) {
        if (error || result.length == 0) {
          respond.json(error);
        } else {
          respond.json(result);
        }
      });
    }
    

    // for booking 
    getUnbookedSM(request, respond) {
      var SMDeets = {
        "roomnumber": request.body.roomnumber
      }
    
      var sql = "SELECT * FROM poppinpass.seatmap WHERE roomnumber = ? AND avaliability = 'active'";
    
      db.query(sql, [SMDeets.roomnumber], function(error, result) {
        if (error || result.length == 0) {
          respond.json(error);
        } else {
          respond.json(result);
        }
      });
    }
    

    bookedSM(request, respond) {
        var SMDetails = {
          "_id": parseInt(request.params._id),
        }
      
        var sql = "UPDATE poppinpass.seatmap SET `avaliability` = 'Booked' WHERE _id = ?";
      
        db.query(sql, [SMDetails._id], function(error, result) {
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
const seatmap = new Seatmap;
module.exports = Seatmap;