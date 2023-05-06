var db = require('./../../dbconnection');
class staffDB{

    loginStaff(staffaccount, callback){
        var sql = "SELECT * FROM poppinpass.staffaccount WHERE username = ? AND password = ?"

        db.query(sql, [staffaccount.username, staffaccount.password], callback);
    }

    getAllStaff(callback) {
        var sql = "SELECT * FROM poppinpass.staffaccount";

        return db.query(sql, callback);
    }

    updateStaff(staffaccount, callback) {
        var sql = "UPDATE poppinpass.staffaccount SET username = ?, password = ?, role = ?, status = ? WHERE _id = ?";

        return db.query(sql, [staffaccount.username, staffaccount.password,staffaccount.role, staffaccount.status, staffaccount._id], callback);
    }

    createStaff(staffaccount, callback) {
        var sql = "INSERT INTO poppinpass.staffaccount (username, password, role, status) VALUES (?, ?, ?, ?)";

        return db.query(sql, [staffaccount.username, staffaccount.password, staffaccount.role, staffaccount.status], callback);
    }

}
module.exports = staffDB;