var db = require('../dbconnection');

class SeatmapDB{

    addSM(sm, callback){

        var sql = "INSERT INTO poppinpass.seatmap (seatno, `row`, roomnumber, avaliability) VALUES (?, ?, ?, 'active')";
        
        db.query(sql, [sm.seatno, sm.row, sm.roomnumber], callback);
    }

    getAllSM(callback) {
        var sql = "SELECT * FROM poppinpass.seatmap";
        return db.query(sql, callback);
    }

    updateSM(sm, callback) {
        var sql = "UPDATE poppinpass.seatmap SET seatno = ? , `row` = ?, roomnumber = ?, `avaliability` = ? WHERE _id = ?";

        return db.query(sql, [sm.seatno, sm.row, sm.roomnumber, sm.availability, sm._id], callback);
    }
}
module.exports = SeatmapDB;