'use strict';
var db = require('./../../dbconnection');

class MovieTicket {

  searchTicketType(request, respond) {

    const searchDetails = {
      search: request.body.search
    };

    var sql = "SELECT * FROM poppinpass.movieticket WHERE name LIKE ?;";
  
    db.query(sql, [searchDetails.search], function (error, result) {
      console.log("result: " + result);
  
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  // add MovieTicket
  addMovieTicket(request, respond) {
    const movieTicketDetails = {
      name: request.body.name,
      age: request.body.age,
      price: request.body.price
    };
  
    var sql = "INSERT INTO poppinpass.movieticket (name, age, price) VALUES (?, ?, ?)";
  
    db.query(sql, [movieTicketDetails.name, movieTicketDetails.age, movieTicketDetails.price], function(error, result) {
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
  

  // view all movieticket
  viewAllMovieTicket(request, respond) {
    var sql = "SELECT * FROM poppinpass.movieticket";
  
    db.query(sql, function(error, result) {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
  

  // update movieticket
  updateMovieTicket(request, respond) {
    var movieticketDetails = {
      "_id": parseInt(request.params._id),
      "name": request.body.name,
      "age": request.body.age,
      "price": request.body.price
    }
  
    var sql = "UPDATE poppinpass.movieticket SET name = ?, age = ?, price = ? WHERE _id = ?";
  
    db.query(sql, [movieticketDetails.name, movieticketDetails.age, movieticketDetails.price, movieticketDetails._id], function(error, result) {
      if (error) {
        respond.json(error);
        console.log(error);
      } else {
        respond.json(result);
        console.log(movieticketDetails);
      }
    });
  }
  

  suspendMovieTicket(request, respond) {
    var MovieTicketDetails = {
      "_id": parseInt(request.params._id),
    }
  
    var sql = "DELETE FROM poppinpass.movieticket WHERE _id = ?";
  
    db.query(sql, [MovieTicketDetails._id], function(error, result) {
      if (error) {
        respond.json(error);
        console.log(error);
      } else {
        respond.json(result);
      }
    });
  }

  
  
}
const movieticket = new MovieTicket;
module.exports = MovieTicket;