var db = require('../dbconnection');

class CinemaRoomDB{

    addCinemaRoom(cinemaroom, callback){

        console.log("Room Number: "+ cinemaroom.roomnumber);
        var sql = "INSERT INTO poppinpass.cinemaroom (roomnumber) VALUES (?)";
        
        db.query(sql, [cinemaroom.roomnumber], callback);
    }

    getAllCinemaRoom(callback) {
        var sql = "SELECT * FROM poppinpass.cinemaroom";
        return db.query(sql, callback);
    }

    updateCinemaRoom(cinemaroom, callback) {
        var sql = "UPDATE poppinpass.cinemaroom SET roomnumber = ? WHERE _id = ?";

        return db.query(sql, [cinemaroom.roomnumber, cinemaroom._id], callback);
    }
}
module.exports = CinemaRoomDB;