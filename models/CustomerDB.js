var db = require('../dbconnection');

class CustomerDB{

    registerUser(signup, callback){

        console.log("Username: "+ signup.username);
        console.log("Email: " + signup.email);
        console.log("Password: "+signup.password);
        var sql = "INSERT INTO poppinpass.signup (username, email, password) VALUES (?, ?, ?)";
        
        db.query(sql, [signup.username,signup.email, signup.password], callback);
    }
    loginUser(signup, callback){
        var sql = "SELECT * FROM signup WHERE username = ? AND password = ?"

        db.query(sql, [signup.username, signup.password], callback);
    }

    updateUser(signup, callback){
        var sql = "UPDATE signup SET username = ?, email = ?, password = ? WHERE _id = ?";
        return db.query(sql, [signup.username, signup.email, signup.password, signup._id], callback);
    }

    deleteUser(_id, callback) {
        var sql = "DELETE FROM signup WHERE _id = ?";

        return db.query(sql, [_id], callback);
    }

    getAllUsers(callback) {
        var sql = "SELECT * FROM poppinpass.signup";
        return db.query(sql, callback);
    }
}
module.exports = CustomerDB;