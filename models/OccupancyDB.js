var db = require('../dbconnection');

class OccupancyDB{

    addOccu(occupancy, callback){

        console.log("Seat number: "+ occupancy.seatno);
        console.log("Row: "+ occupancy.row);
        var sql = "INSERT INTO poppinpass.occupancy (seatno, `row`) VALUES (?, ?)";
        
        db.query(sql, [occupancy.seatno, occupancy.row], callback);
    }

    getAllOccu(callback) {
        var sql = "SELECT * FROM poppinpass.occupancy";
        return db.query(sql, callback);
    }

    updateOccu(occupancy, callback) {
        var sql = "UPDATE poppinpass.occupancy SET seatno = ?, `row` = ? WHERE _id = ?";

        return db.query(sql, [occupancy.seatno, occupancy.row, occupancy._id], callback);
    }
}
module.exports = OccupancyDB;