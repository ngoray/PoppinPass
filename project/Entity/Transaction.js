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
// monthly for tickets; returns month(date) and tickets_booked(int)
viewMonthlyTicketTable(callback) {
  var sql = "SELECT CONCAT(YEAR(`date`), '-', LPAD(MONTH(`date`), 2, '0')) AS `Month`, SUM(`quantityoftickets`) AS `Total Tickets Booked` FROM `transactionhistory` WHERE `date` >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH) GROUP BY `Month`";

  return db.query(sql, callback);
}

viewMonthlyTicket(request, respond) {
  transaction.viewMonthlyTicketTable(function (error, result){
      if (error) {
          respond.json(error);
      } else {
        console.log(result);
          respond.json(result);
      }
  });
}

// weekly for tickets; returns week(varchar) and tickets_booked(int)
viewWeeklyTicketTable(callback) {
  var sql = "SELECT WEEK(date) AS week_number, SUM(quantityoftickets) AS total_tickets_booked FROM transactionhistory WHERE date >= DATE_SUB(CURDATE(), INTERVAL 3 WEEK) AND date <= CURDATE() GROUP BY WEEK(date) ORDER BY WEEK(date) ASC";

  return db.query(sql, callback);
}

viewWeeklyTicket(request, respond) {
  transaction.viewWeeklyTicketTable(function (error, result){
      if (error) {
          respond.json(error);
      } else {
        console.log(result);
          respond.json(result);
      }
  });
}

// daily for tickets; returns day(date) and tickets_booked(int)
viewDailyTicketTable(callback) {
  var sql = "SELECT `date`, SUM(`quantityoftickets`) AS `tickets_booked` FROM `transactionhistory` WHERE `date` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY `date`";

  return db.query(sql, callback);
}

viewDailyTicket(request, respond) {
  transaction.viewDailyTicketTable(function (error, result){
      if (error) {
          respond.json(error);
      } else {
        console.log(result);
          respond.json(result);
      }
  });
}
// monthly for food; returns month(y-m) and fooditems_sold(int)
viewMonthlyFoodTable(callback) {
  var sql = "SELECT DATE_FORMAT(date, '%Y-%m') AS month, COUNT(*) AS fooditems_sold FROM transactionhistory WHERE date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH) GROUP BY  DATE_FORMAT(date, '%Y-%m') ORDER BY DATE_FORMAT(date, '%Y-%m') ASC";

  return db.query(sql, callback);
}

viewMonthlyFood(request, respond) {
  transaction.viewMonthlyFoodTable(function (error, result){
      if (error) {
          respond.json(error);
      } else {
        console.log(result);
          respond.json(result);
      }
  });
}

// weekly for food; returns week_number(int) and fooditems_sold(int)
viewWeeklyFoodTable(callback) {
  var sql = "SELECT WEEK(date, 1) as week_number, COUNT(*) as fooditems_sold FROM transactionhistory WHERE date >= DATE_SUB(CURDATE(), INTERVAL 4 WEEK) AND date <= CURDATE() GROUP BY WEEK(date, 1) ORDER BY WEEK(date, 1) ASC;";

  return db.query(sql, callback);
}

viewWeeklyFood(request, respond) {
  transaction.viewWeeklyFoodTable(function (error, result){
      if (error) {
          respond.json(error);
      } else {
        console.log(result);
          respond.json(result);
      }
  });
}

// daily for food; returns date(Date) and fooditems_sold(int)
viewDailyFoodTable(callback) {
  var sql = "SELECT DATE(`date`) AS `Date`, COUNT(*) AS `fooditems_sold` FROM `transactionhistory` WHERE `date` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY `Date`";

  return db.query(sql, callback);
}

viewDailyFood(request, respond) {
  transaction.viewDailyFoodTable(function (error, result){
      if (error) {
          respond.json(error);
      } else {
        console.log(result);
          respond.json(result);
      }
  });
}


}
const transaction = new Transaction;
module.exports = Transaction;