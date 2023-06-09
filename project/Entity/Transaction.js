var db = require('./../../dbconnection');

class Transaction{

    viewTransaction(request, respond) {
      console.log("IVE BEEN CALLED");
      var transac = {
        "accountname": request.body.accountname
      }
    
      var sql = "SELECT * FROM poppinpass.transactionhistory WHERE accountname = ?";
    
      db.query(sql, [transac.accountname], function (error, result) {
        if (error) {
          respond.json(error);
        } else {
          console.log(result);
          respond.json(result);
        }
      });
    }
    
    suspendTransaction(request, respond) {
      var transacDetails = {
        "_id": parseInt(request.params._id),
      }
    
      var sql = "DELETE FROM poppinpass.transactionhistory WHERE _id = ?";
    
      db.query(sql, [transacDetails._id], function (error, result) {
        if (error) {
          respond.json(error);
          console.log(error);
        } else {
          respond.json(result);
        }
      });
    }
    
    addTransaction(request, respond) {
      const transacdeets = {
        accountname: request.body.accountname,
        movietitle: request.body.movietitle,
        tickettype: request.body.tickettype,
        screentime: request.body.screentime,
        roomno: request.body.roomno,
        seatno: request.body.seatno,
        foodname: request.body.foodname,
        totalprice: request.body.totalprice,
        quantityoftickets: request.body.quantityoftickets
      };
    
      var sql = "INSERT INTO poppinpass.transactionhistory (accountname, movietitle, tickettype, screentime, roomno, seatno, foodname, totalprice,quantityoftickets, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?, CURRENT_DATE)";
    
      db.query(sql, [transacdeets.accountname, transacdeets.movietitle, transacdeets.tickettype, transacdeets.screentime, transacdeets.roomno, transacdeets.seatno, transacdeets.foodname, transacdeets.totalprice,transacdeets.quantityoftickets], function (error, result) {
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
    

// monthly for tickets; returns month(date) and tickets_booked(int)
generateMonthlyTicket(request, respond) {
  var sql = "SELECT CONCAT(YEAR(`date`), '-', LPAD(MONTH(`date`), 2, '0')) AS `Month`, SUM(`quantityoftickets`) AS `Total_Tickets_Booked` FROM `transactionhistory` WHERE `date` >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH) GROUP BY `Month`";

  db.query(sql, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      console.log(result);
      respond.json(result);
    }
  });
}

// weekly for tickets; returns week(varchar) and tickets_booked(int)
generateWeeklyTicket(request, respond) {
  var sql = "SELECT WEEK(date) AS week_number, SUM(quantityoftickets) AS total_tickets_booked FROM transactionhistory WHERE date >= DATE_SUB(CURDATE(), INTERVAL 3 WEEK) AND date <= CURDATE() GROUP BY WEEK(date) ORDER BY WEEK(date) ASC";

  db.query(sql, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      console.log(result);
      respond.json(result);
    }
  });
}


// daily for tickets; returns day(date) and tickets_booked(int)
generateDailyTicket(request, respond) {
  var sql = "SELECT `date`, SUM(`quantityoftickets`) AS `tickets_booked` FROM `transactionhistory` WHERE `date` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY `date`";

  db.query(sql, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      console.log(result);
      respond.json(result);
    }
  });
}



// monthly for food; returns month(y-m) and fooditems_sold(int)
generateMonthlyFood(request, respond) {
  var sql = "SELECT DATE_FORMAT(date, '%Y-%m') AS month, COUNT(*) AS fooditems_sold FROM transactionhistory WHERE date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH) GROUP BY DATE_FORMAT(date, '%Y-%m') ORDER BY DATE_FORMAT(date, '%Y-%m') ASC";

  db.query(sql, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      console.log(result);
      respond.json(result);
    }
  });
}


// weekly for food; returns week_number(int) and fooditems_sold(int)
generateWeeklyFood(request, respond) {
  var sql = "SELECT WEEK(date, 1) as week_number, COUNT(*) as fooditems_sold FROM transactionhistory WHERE date >= DATE_SUB(CURDATE(), INTERVAL 4 WEEK) AND date <= CURDATE() GROUP BY WEEK(date, 1) ORDER BY WEEK(date, 1) ASC;";

  db.query(sql, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      console.log(result);
      respond.json(result);
    }
  });
}


// daily for food; returns date(Date) and fooditems_sold(int)
generateDailyFood(request, respond) {
  var sql = "SELECT DATE(`date`) AS `Date`, COUNT(*) AS `fooditems_sold` FROM `transactionhistory` WHERE `date` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY `Date`";

  db.query(sql, function (error, result) {
    if (error) {
      respond.json(error);
    } else {
      console.log(result);
      respond.json(result);
      }
    });
  }

  //generateReport
  viewYearlyTickets(request, respond) {
    var sql = "SELECT YEAR(date) AS years, COUNT(*) AS tickets_booked FROM `transactionhistory` GROUP BY YEAR(date);";

    db.query(sql, function (error, result) {
      if (error) {
        respond.json(error);
      } else {
        console.log(result);
        respond.json(result);
        }
      });
    }

  viewYearlyFood(request, respond) {
    var sql = "SELECT YEAR(date) AS years, COUNT(*) AS fooditems_sold FROM `transactionhistory` GROUP BY YEAR(date);";
  
    db.query(sql, function (error, result) {
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