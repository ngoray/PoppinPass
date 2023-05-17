var db = require('./../../dbconnection');
const jwt = require('jsonwebtoken');

class UserAccount{

  loginTable(useraccount, callback){
    var sql = "SELECT * FROM poppinpass.useraccount WHERE name = ? AND password = ?"

    db.query(sql, [useraccount.name, useraccount.password], callback);
}
  
login(request, respond) {
  var corplog = { "name": request.body.name, "password": request.body.password };
  useraccount.loginTable(corplog, function (error, result) {
      if (error || result.length == 0) {
          respond.status(200).json({
              "message": "Something went wrong"
          });
      }
      else {
        console.log("result[0].loyaltypoints: "+ result[0].loyaltypoints);
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

    addUserAccountTable(useraccount, callback){

        console.log("Name: "+ useraccount.name);
        console.log("Email: "+ useraccount.email);
        console.log("Password: "+ useraccount.password);
        console.log("Role: "+ useraccount.role);
        var sql = "INSERT INTO poppinpass.useraccount (name, email, password, `role`, status, loyaltypoints) VALUES (?, ?, ?, ?, 'active', 100)";
        
        db.query(sql, [useraccount.name, useraccount.email, useraccount.password,useraccount.role], callback);
    }

    addUserAccount(request, respond) {
        const accountDetails = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            role: request.body.role
    
        };
    
        console.log(accountDetails);
    
        useraccount.addUserAccountTable(accountDetails, (error, result) => {
          console.log(result);
          if (error || result.length == 0) {
            respond.status(200).json({
                "message": "Something went wrong",
            error
            });
        }
            else {
                const token = jwt.sign({"name": result.name}, "secretstring",{expiresIn:3000} )
                respond.status(200).json({
                token,
                "name": result.name,         
                "message": "Success"
            });
            }
        });
      }

      viewAllUserAccountTable(callback) {
        var sql = "SELECT * FROM poppinpass.useraccount";

        return db.query(sql, callback);
      }

      viewAllUserAccount(request, respond) {
        useraccount.viewAllUserAccountTable(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    updateUserAccounttable(useraccount, callback){
        var sql = "UPDATE poppinpass.useraccount SET name = ?, password = ?, email = ?, `role` = ?, status = ? WHERE _id = ?";

        return db.query(sql, [useraccount.name, useraccount.password, useraccount.email,useraccount.role, useraccount.status, useraccount._id], callback);
    }

    updateUserAccount(request, respond) {
        var UADetails = {
            "_id": parseInt(request.params._id),
            "name":request.body.name,
            "password":request.body.password,
            "email":request.body.email,
            "role":request.body.role,
            "status": request.body.status
            
          }
    
          useraccount.updateUserAccounttable(UADetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
                console.log(UADetails);
            }
        });
    }


    updateCustomerAccounttable(useraccount, callback){
        var sql = "UPDATE poppinpass.useraccount SET password = ? WHERE name = ?";

        return db.query(sql, [useraccount.password, useraccount.name], callback);
    }

    updateCustomerAccount(request, respond) {
        var UADetails = {
            "name":request.body.name,
            "password":request.body.password
            
          }
    
          useraccount.updateCustomerAccounttable(UADetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
                console.log(UADetails);
            }
        });
    }

    updateLoyaltyPointsTable(useraccount, callback){
        var sql = "UPDATE poppinpass.useraccount SET loyaltypoints = ? WHERE name = ?";

        return db.query(sql, [useraccount.loyaltypoints, useraccount.name], callback);
    }

    updateLoyaltyPoints(request, respond) {
        var UADetails = {
            "name":request.body.name,
            "loyaltypoints":request.body.loyaltypoints
            
          }
    
          useraccount.updateLoyaltyPointsTable(UADetails, function(error, result){
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