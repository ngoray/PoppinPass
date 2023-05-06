var db = require('./../../dbconnection');

class CustomerDB{

    registerUser(customeraccount, callback){

        console.log("Username: "+ customeraccount.username);
        console.log("Email: " + customeraccount.email);
        console.log("Password: "+customeraccount.password);
        var sql = "INSERT INTO poppinpass.customeraccount (username, email, password, status, loyaltypoint) VALUES (?, ?, ?, 'active', '100')";
        db.query(sql, [customeraccount.username,customeraccount.email, customeraccount.password], callback);
    }

    registerUser4admin(customeraccount, callback){

        console.log("Username: "+ customeraccount.username);
        console.log("Email: " + customeraccount.email);
        console.log("Password: "+customeraccount.password);
        console.log("Status: "+customeraccount.status);
        var sql = "INSERT INTO poppinpass.customeraccount (username, email, password, status, loyaltypoint) VALUES (?, ?, ?, ?, '100')";
        
        db.query(sql, [customeraccount.username,customeraccount.email, customeraccount.password, customeraccount.status], callback);
    }
    loginUser(customeraccount, callback){
        var sql = "SELECT * FROM customeraccount WHERE username = ? AND password = ?"

        db.query(sql, [customeraccount.username, customeraccount.password], callback);
    }

    updateUser(customeraccount, callback) {
        var sql = "UPDATE poppinpass.customeraccount SET username = ?, email = ?, status = ? WHERE _id = ?";

        return db.query(sql, [customeraccount.username, customeraccount.email, customeraccount.status, customeraccount._id], callback);
    }

    deleteUser(_id, callback) {
        var sql = "DELETE FROM customeraccount WHERE _id = ?";

        return db.query(sql, [_id], callback);
    }

    getAllUsers(callback) {
        var sql = "SELECT * FROM poppinpass.customeraccount";
        return db.query(sql, callback);
    }
}
module.exports = CustomerDB;