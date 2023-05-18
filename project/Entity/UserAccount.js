var db = require('./../../dbconnection');
const jwt = require('jsonwebtoken');

class UserAccount{

  searchUserAccount(request, respond) {

    const searchDetails = {
      search: request.body.search
    };

    var sql = "SELECT * FROM poppinpass.useraccount WHERE name LIKE ?;";
  
    db.query(sql, [searchDetails.search], function (error, result) {
      console.log("result: " + result);
  
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

    login(request, respond) {
        var corplog = { "name": request.body.name, "password": request.body.password };
        var sql = "SELECT * FROM poppinpass.useraccount WHERE name = ? AND password = ?";
    
        db.query(sql, [corplog.name, corplog.password], function (error, result) {
            if (error || result.length == 0) {
                respond.status(200).json({
                "message": "Something went wrong"
                });
      }
      else {
        var token = jwt.sign({ "name": result[0].name}, "secretstring",{expiresIn:3000} )
        respond.status(200).json({
          token,    
          "name": result[0].name,
          "email": result[0].email,
          "status": result[0].status,
          "role": result[0].role,
          "loyaltypoints": result[0].loyaltypoints,
          "message": "Success"
        });
      }
    });
  }
  
    addUserAccount(request, respond) {
        const accountDetails = {
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
          role: request.body.role
        };
      
        console.log(accountDetails);
      
        console.log("Name: " + accountDetails.name);
        console.log("Email: " + accountDetails.email);
        console.log("Password: " + accountDetails.password);
        console.log("Role: " + accountDetails.role);
      
        var sql = "INSERT INTO poppinpass.useraccount (name, email, password, `role`, status, loyaltypoints) VALUES (?, ?, ?, ?, 'active', 100)";
      
        db.query(sql, [accountDetails.name, accountDetails.email, accountDetails.password, accountDetails.role], function (error, result) {
          console.log(result);
          if (error || result.length == 0) {
            respond.status(200).json({
              "message": "Something went wrong",
              error
            });
          } else {
            const token = jwt.sign({ "name": accountDetails.name }, "secretstring", { expiresIn: 3000 })
            respond.status(200).json({
              token,
              "name": accountDetails.name,
              "message": "Success"
            });
          }
        });
    }
      

    viewAllUserAccount(request, respond) {
        var sql = "SELECT * FROM poppinpass.useraccount";
      
        db.query(sql, function (error, result) {
          if (error) {
            respond.json(error);
          } else {
            respond.json(result);
          }
        });
      }
      
      updateUserAccount(request, respond) {
        var UADetails = {
          "_id": parseInt(request.params._id),
          "name": request.body.name,
          "password": request.body.password,
          "email": request.body.email,
          "role": request.body.role,
          "status": request.body.status
        }
      
        var sql = "UPDATE poppinpass.useraccount SET name = ?, password = ?, email = ?, `role` = ?, status = ? WHERE _id = ?";
      
        db.query(sql, [UADetails.name, UADetails.password, UADetails.email, UADetails.role, UADetails.status, UADetails._id], function (error, result) {
          if (error) {
            respond.json(error);
            console.log(error);
          } else {
            respond.json(result);
            console.log(UADetails);
          }
        });
      }
      


    updateCustomerAccount(request, respond) {
        var UADetails = {
          "name": request.body.name,
          "password": request.body.password
        }
      
        var sql = "UPDATE poppinpass.useraccount SET password = ? WHERE name = ?";
      
        db.query(sql, [UADetails.password, UADetails.name], function (error, result) {
          if (error) {
            respond.json(error);
            console.log(error);
          } else {
            respond.json(result);
            console.log(UADetails);
          }
        });
      }
      

    updateLoyaltyPoints(request, respond) {
        var UADetails = {
          "name": request.body.name,
          "loyaltypoints": request.body.loyaltypoints
        }
      
        var sql = "UPDATE poppinpass.useraccount SET loyaltypoints = ? WHERE name = ?";
      
        db.query(sql, [UADetails.loyaltypoints, UADetails.name], function (error, result) {
          if (error) {
            respond.json(error);
            console.log(error);
          } else {
            respond.json(result);
            console.log(UADetails);
          }
        });
      }
      

}

const useraccount = new UserAccount;
module.exports = UserAccount;