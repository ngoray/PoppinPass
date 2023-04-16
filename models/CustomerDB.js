var db = require('../dbconnection');

class CustomerDB{

    registerUser(customeraccount, callback){

        console.log("Username: "+ customeraccount.username);
        console.log("Email: " + customeraccount.email);
        console.log("Password: "+customeraccount.password);
        var sql = "INSERT INTO poppinpass.customeraccount (username, email, password, status) VALUES (?, ?, ?, 'active')";
        
        db.query(sql, [customeraccount.username,customeraccount.email, customeraccount.password], callback);
    }
    loginUser(customeraccount, callback){
        var sql = "SELECT * FROM customeraccount WHERE username = ? AND password = ?"

        db.query(sql, [customeraccount.username, customeraccount.password], callback);
    }

    updateUser(customeraccount, callback){
        var sql = "UPDATE customeraccount SET username = ?, email = ?, password = ? WHERE _id = ?";
        return db.query(sql, [customeraccount.username, customeraccount.email, customeraccount.password, customeraccount._id], callback);
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