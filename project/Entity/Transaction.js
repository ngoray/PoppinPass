var db = require('./../../dbconnection');

class Transaction{

    // POST
    viewTransactionTable(transac, callback) {
        var sql = "SELECT * FROM poppinpass.transactionhistory WHERE accountname = ?";

        return db.query(sql, [transac.accountname],callback);
      }
    
      viewTransaction(request, respond) {
        console.log("IVE BEEN CALLED");
        var transac = {
            "accountname":request.body.accountname
        }

        transaction.viewTransactionTable(transac, function (error, result){
            if (error) {
                respond.json(error);
            } else {
              console.log(result);
                respond.json(result);
            }
        });
    }

    // DELETE
    suspendTransactiontable(transac, callback) {
        var sql = "DELETE FROM poppinpass.transactionhistory WHERE _id = ?";
    
        return db.query(sql, [transac._id], callback);
      }
    
      suspendTransaction(request, respond) {
        var transacDetails = {
            "_id": parseInt(request.params._id),
          }
    
        transaction.suspendTransactiontable(transacDetails, function(error, result){
            if (error) {
                respond.json(error);
                console.log(error);
            } else {
                respond.json(result);
            }
        });
    }

    // POST
    addTransactionTable(transac, callback){

        var sql = "INSERT INTO poppinpass.transactionhistory (accountname, movietitle, tickettype, screentime, roomno, seatno, foodname, totalprice, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_DATE)";
        
        db.query(sql, [transac.accountname, transac.movietitle, transac.tickettype, transac.screentime, transac.roomno, transac.seatno, transac.foodname, transac.totalprice], callback);
    }

    addTransaction(request, respond) {
        const transacdeets = {
          accountname: request.body.accountname,
          movietitle: request.body.movietitle,
          tickettype:request.body.tickettype,
          screentime:request.body.screentime,
          roomno:request.body.roomno,
          seatno:request.body.seatno,
          foodname:request.body.foodname,
          totalprice:request.body.totalprice,
        };
    
        transaction.addTransactionTable(transacdeets, (error, result) => {
          console.log(result);
    
          if (error) {
            respond.json({
              message: 'Something went wrong',
              error,
            });
          } else {
            respond.json(result);
          }
        });
      }

      viewAllUserProfileDB(callback) {
        var sql = "SELECT * FROM poppinpass.userprofile";

        return db.query(sql, callback);
      }

      viewAllUserProfile(request, respond) {
        userprofile.viewAllUserProfileDB(function (error, result){
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    }

    updateUserProfileDB(occupancy, callback) {
      var sql = "UPDATE poppinpass.userprofile SET `role` = ?, description = ? WHERE _id = ?";
  
      return db.query(sql, [occupancy.role, occupancy.description, occupancy._id], callback);
  }

  updateUserProfile(request, respond) {
    var UPDetails = {
        "_id": parseInt(request.params._id),
        "role":request.body.role,
        "description":request.body.description
      }

      userprofile.updateUserProfileDB(UPDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(UPDetails);
        }
    });
}

}
const transaction = new Transaction;
module.exports = Transaction;