// "use strict"

// const LoginDB = require('../models/CustomerDB');
// const jwt = require('jsonwebtoken');

// var loginDB = new LoginDB();

// function register(request,respond) {

//     var signupReg = {
//         "username":request.body.username,
//         "email": request.body.email,
//         "password":request.body.password
//     };
//     console.log(signupReg);
//     loginDB.registerUser(signupReg, function (error, result) {
//         console.log(result)
//         if (error || result.length == 0) {
//             respond.status(200).json({
//                 "message": "Something went wrong",
//                 error
//             });
//         }
//         else {
//             var token = jwt.sign({"username": result.username}, "secretstring",{expiresIn:3000} )
//             respond.status(200).json({
//                 token,
//                 "username": result.username,         
//                 "message": "Success"
//             });
//         }
//     });
// }

// function login(request, respond) {
//     // var now = new Date();

//     var signup = { "username": request.body.username, "password": request.body.password };
//     // user.username=request.body.username;
//     // user.password = request.body.password;

//     loginDB.loginUser(signup, function (error, result) {

//         if (error || result.length == 0) {
//             respond.status(200).json({
//                 "message": "Something went wrong"
//             });
//         }
//         else {
//             var token = jwt.sign({ "username": result[0].username}, "secretstring",{expiresIn:3000} )
//             respond.status(200).json({
//                 token,    
//                 "username": result[0].username,
//                 "status": result[0].status,                
//                 "message": "Success"
//             });
//         }
//     });
// }

// function updateUser(request, respond) {
//     var userDetails = {
//         "_id": parseInt(request.params._id),
//         "username":request.body.username,
//         "role":request.body.role,
//         "status":request.body.status
//     }

//     loginDB.updateUser(userDetails, function(error, result){
//         if (error) {
//             respond.json(error);
//             console.log(error);
//         } else {
//             respond.json(result);
//             console.log(staffDetails);
//         }
//     });
// }

// function deleteUser(request, respond) {
//     loginDB.deleteUser(request.params._id, function (error, result) {

//         if (error) {
//             respond.json(error);
//         } else {
//             respond.json(result);
//         }
//     });
// }

// function getAllUsers(request, respond) {
//     loginDB.getAllUsers(function (error, result) {

//         if (error) {
//             respond.json(error);
//         } else {
//             respond.json(result);
//         }
//     });
// }

// module.exports = { register, login, updateUser, deleteUser, getAllUsers};

"use strict";

const LoginDB = require('../models/CustomerDB');
const jwt = require('jsonwebtoken');
const loginDB = new LoginDB();

class CustomerController {

  register(request, respond) {
    const signupReg = {
      "username": request.body.username,
      "email": request.body.email,
      "password": request.body.password
    };
    console.log(signupReg);
    loginDB.registerUser(signupReg, (error, result) => {
      console.log(result);
      if (error || result.length == 0) {
        respond.status(200).json({
          "message": "Something went wrong",
          error
        });
      }
      else {
        const token = jwt.sign({"username": result.username}, "secretstring",{expiresIn:3000} )
        respond.status(200).json({
          token,
          "username": result.username,         
          "message": "Success"
        });
      }
    });
  }

  register4admin(request, respond) {
    const signupReg = {
      "username": request.body.username,
      "email": request.body.email,
      "password": request.body.password,
      "status": request.body.status
    };
    console.log(signupReg);
    loginDB.registerUser4admin(signupReg, (error, result) => {
      console.log(result);
      if (error || result.length == 0) {
        respond.status(200).json({
          "message": "Something went wrong",
          error
        });
      }
      else {
        const token = jwt.sign({"username": result.username}, "secretstring",{expiresIn:3000} )
        respond.status(200).json({
          token,
          "username": result.username,         
          "message": "Success"
        });
      }
    });
  }

  login(request, respond) {
    const signup = { "username": request.body.username, "password": request.body.password };
    loginDB.loginUser(signup, (error, result) => {
      if (error || result.length == 0) {
        respond.status(200).json({
          "message": "Something went wrong"
        });
      }
      else {
        const token = jwt.sign({ "username": result[0].username}, "secretstring",{expiresIn:3000} )
        respond.status(200).json({
          token,    
          "username": result[0].username,
          "email": result[0].email,
          "status": result[0].status,                
          "message": "Success"
        });
      }
    });
  }

  updateUser(request, respond) {
    const userDetails = {
      "_id": parseInt(request.params._id),
      "username": request.body.username,
      "email": request.body.email,
      "status": request.body.status
    };
    loginDB.updateUser(userDetails, (error, result) => {
      if (error) {
        respond.json(error);
        console.log(error);
      } else {
        respond.json(result);
        console.log(userDetails);
      }
    });
  }

  deleteUser(request, respond) {
    loginDB.deleteUser(request.params._id, (error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  getAllUsers(request, respond) {
    loginDB.getAllUsers((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
}

module.exports = CustomerController;
