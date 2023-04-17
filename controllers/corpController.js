"use strict"

const staffLoginDB = require('../models/corpDB');
const jwt = require('jsonwebtoken');

var loginDB = new staffLoginDB();


function login(request, respond) {
    // var now = new Date();

    var corplog = { "username": request.body.username, "password": request.body.password };
    // user.username=request.body.username;
    // user.password = request.body.password;

    loginDB.loginCorp(corplog, function (error, result) {

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


module.exports = {login};