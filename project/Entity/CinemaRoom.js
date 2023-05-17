var db = require('./../../dbconnection');

class CinemaRoom{
    // Add CinemaRoom
    addCinemaRoom(request, respond) {
      const cinemaroomdata = {
        roomnumber: request.body.roomnumber,
      };
    
      console.log(cinemaroomdata);
    
      var sql = "INSERT INTO poppinpass.cinemaroom (roomnumber, availability) VALUES (?, 'active')";
    
      db.query(sql, [cinemaroomdata.roomnumber], function(error, result) {
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
    viewAllCinemaRoom(request, respond) {
      var sql = "SELECT * FROM poppinpass.cinemaroom";
    
      db.query(sql, function(error, result) {
        if (error) {
          respond.json(error);
        } else {
          respond.json(result);
        }
      });
    }
    

    // Update CinemaRoom
    updateCinemaRoom(request, respond) {
      var CinemaRoomDetails = {
        "_id": parseInt(request.params._id),
        "availability": request.body.availability
      };
    
      var sql = "UPDATE poppinpass.cinemaroom SET availability = ? WHERE _id = ?";
    
      db.query(sql, [CinemaRoomDetails.availability, CinemaRoomDetails._id], function(error, result) {
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