"use strict"

const LoginDB = require('../models/CustomerDB');
const jwt = require('jsonwebtoken');

var loginDB = new LoginDB();

function register(request,respond) {

    var signupReg = {
        "username":request.body.username,
        "email": request.body.email,
        "password":request.body.password
    };
    console.log(signupReg);
    loginDB.registerUser(signupReg, function (error, result) {
        console.log(result)
        if (error || result.length == 0) {
            respond.status(200).json({
                "message": "Something went wrong",
                error
            });
        }
        else {
            var token = jwt.sign({"username": result.username}, "secretstring",{expiresIn:3000} )
            respond.status(200).json({
                token,
                "username": result.username,         
                "message": "Success"
            });
        }
    });
}

function login(request, respond) {
    // var now = new Date();

    var signup = { "username": request.body.username, "password": request.body.password };
    // user.username=request.body.username;
    // user.password = request.body.password;

    loginDB.loginUser(signup, function (error, result) {

        if (error || result.length == 0) {
            respond.status(200).json({
                "message": "Something went wrong"
            });
        }
        else {
            var token = jwt.sign({ "username": result[0].username}, "secretstring",{expiresIn:3000} )
            respond.status(200).json({
                token,    
                "username": result[0].username,
                "status": result[0].status,                
                "message": "Success"
            });
        }
    });
}

function updateUser(request, respond) {
    var userDetails = {
        "_id": request.params._id,
        "username": request.body.username,
        "email": request.body.email,
        "password": request.body.password
        
    }
    loginDB.updateUser(userDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(userDetails);
        }
    });
}

function deleteUser(request, respond) {
    loginDB.deleteUser(request.params._id, function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

function getAllUsers(request, respond) {
    loginDB.getAllUsers(function (error, result) {

        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}

module.exports = { register, login, updateUser, deleteUser, getAllUsers};