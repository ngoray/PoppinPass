var db = require('../dbconnection');
class corpDB{

    loginCorp(staffaccount, callback){
        var sql = "SELECT * FROM poppinpass.staffaccount WHERE username = ? AND password = ?"

        db.query(sql, [staffaccount.username, staffaccount.password], callback);
    }

}
module.exports = corpDB;