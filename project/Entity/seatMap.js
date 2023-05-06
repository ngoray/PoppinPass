var db = require('./../../dbconnection');

class Seatmap {

    addSMDB(sm, callback){

        var sql = "INSERT INTO poppinpass.seatmap (seatno, `row`, roomnumber, avaliability) VALUES (?, ?, ?, 'active')";
        
        db.query(sql, [sm.seatno, sm.row, sm.roomnumber], callback);
    }

    addSM(request, respond) {
        const smdata = {
          seatno: request.body.seatno,
          row: request.body.row,
          roomnumber: request.body.roomnumber
    
        };
    
        console.log(smdata);
    
        seatmap.addSMDB(smdata, (error, result) => {
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

    viewAllSMDB(callback) {
        var sql = "SELECT * FROM poppinpass.seatmap";
        return db.query(sql, callback);
    }

    viewAllSM(request, respond) {
        seatmap.getAllSMDB((error, result) => {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }

    updateSMDB(sm, callback) {
        var sql = "UPDATE poppinpass.seatmap SET seatno = ? , `row` = ?, roomnumber = ?, `avaliability` = ? WHERE _id = ?";

        return db.query(sql, [sm.seatno, sm.row, sm.roomnumber, sm.availability, sm._id], callback);
    }

    updateSM(request, respond) {
        var SMDetails = {
            "_id": parseInt(request.params._id),
            "seatno":request.body.seatno,
            "row" : request.body.roomno,
            "roomnumber" : request.body.roomnumber,
            "availability": request.body.availability
          }
    
          seatmap.updateSMDB(SMDetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
                console.log(SMDetails);
            }
        });
      }

    deleteSMDB(sm, callback) {
        var sql = "DELETE FROM poppinpass.seatmap WHERE _id = ?";

        return db.query(sql, sm, callback);
    }

    deleteSM(request, respond) {

        seatmap.deleteSMDB(request.params._id, function (error, result) {
    
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    getSomeSMDB(sm, callback){
        var sql = "SELECT * FROM poppinpass.seatmap WHERE roomnumber = ?";

        return db.query(sql, [sm.roomnumber], callback);
    }

    getSomeSM(request, respond) {
        var SMDeets = {
          "roomnumber":request.body.roomnumber
        }
    
        seatmap.getSomeSMDB(SMDeets,(error,result) => {
          if (error || result.length == 0) {
            respond.json(error);
    
          } else {
            respond.json(result);
          }
        })
      }
}
const seatmap = new Seatmap;
module.exports = Seatmap;