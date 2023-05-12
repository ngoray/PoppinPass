var db = require('./../../dbconnection');

class CinemaRoom{
    // Add CinemaRoom
    addCinemaRoomTable(cinemaroom, callback){

        console.log("Room Number: "+ cinemaroom.roomnumber);
        var sql = "INSERT INTO poppinpass.cinemaroom (roomnumber, availability) VALUES (?, 'active')";
        
        db.query(sql, [cinemaroom.roomnumber], callback);
    }

    addCinemaRoom(request, respond) {
        const cinemaroomdata = {
          roomnumber: request.body.roomnumber,
    
        };
    
        console.log(cinemaroomdata);
    
        cinemaroom.addCinemaRoomTable(cinemaroomdata, (error, result) => {
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

    // View CinemaRoom
    viewAllCinemaRoomTable(callback) {
        var sql = "SELECT * FROM poppinpass.cinemaroom";
        return db.query(sql, callback);
    }

    viewAllCinemaRoom(request, respond) {
        cinemaroom.viewAllCinemaRoomTable((error, result) => {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }

    // Update CinemaRoom
    updateCinemaRoomTable(cinemaroom, callback) {
        var sql = "UPDATE poppinpass.cinemaroom SET  availability = ? WHERE _id = ?";

        return db.query(sql, [cinemaroom.availability, cinemaroom._id], callback);
    }

    updateCinemaRoom(request, respond) {
        var CinemaRoomDetails = {
            "_id": parseInt(request.params._id),
            "availability":request.body.availability
          }
    
          cinemaroom.updateCinemaRoomTable(CinemaRoomDetails, function(error, result){
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
const cinemaroom = new CinemaRoom;
module.exports = CinemaRoom;