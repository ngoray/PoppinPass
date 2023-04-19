"use strict"

const staffLoginDB = require('../models/CorpDB');
const jwt = require('jsonwebtoken');

var staffDB = new staffLoginDB();


function login(request, respond) {
    // var now = new Date();

    var corplog = { "username": request.body.username, "password": request.body.password };
    // user.username=request.body.username;
    // user.password = request.body.password;

    staffDB.loginStaff(corplog, function (error, result) {

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
                "role": result[0].role,            
                "message": "Success"
            });
        }
    });
}

function getAllStaff(request, respond) {

    staffDB.getAllStaff(function (error, result){

        if (error) {
            respond.json(error);
        } else {

            respond.json(result);
        }
    });
}

function updateStaff(request, respond) {
    var staffDetails = {
        "_id": parseInt(request.params._id),
        "username":request.body.username,
        "role":request.body.role,
        "status":request.body.status
    }

    staffDB.updateStaff(staffDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(staffDetails);
        }
    });
}


module.exports = {login, getAllStaff, updateStaff};