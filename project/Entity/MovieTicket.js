'use strict';
var db = require('./../../dbconnection');

class MovieTicket {

  // add MovieTicket
  addMovieTicketTable(movieticket, callback){

    var sql = "INSERT INTO poppinpass.movieticket (name, age, price) VALUES (?, ?, ?)";
    
    db.query(sql, [movieticket.name, movieticket.age, movieticket.price], callback);
}
addMovieTicket(request, respond) {
    const movieTicketDetails = {
      name: request.body.name,
      age: request.body.age,
      price: request.body.price
    };

    movieticket.addMovieTicketTable(movieTicketDetails, (error, result) => {
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
  viewAllMovieTicketTable(callback) {
    var sql = "SELECT * FROM poppinpass.movieticket";
    return db.query(sql, callback);
}

  viewAllMovieTicket(request, respond) {
    movieticket.viewAllMovieTicketTable((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }

  // update movieticket
  updateMovieTicketTable(movieticket, callback) {
    var sql = "UPDATE poppinpass.movieticket SET name = ?, age = ?, price = ? WHERE _id = ?";

    return db.query(sql, [movieticket.name, movieticket.age, movieticket.price, movieticket._id], callback);
}

  updateMovieTicket(request, respond) {
    var movieticketDetails = {
        "_id": parseInt(request.params._id),
        "name":request.body.name,
        "age":request.body.age,
        "price":request.body.price
      }

      movieticket.updateMovieTicketTable(movieticketDetails, function(error, result){
        if (error) {
            respond.json(error);
            console.log(error);
        } else {
            respond.json(result);
            console.log(movieticketDetails);
        }
    });
  }

  suspendMovieTicketTable(movieticket, callback) {
    var sql = "DELETE FROM poppinpass.movieticket WHERE _id = ?";

    return db.query(sql, [movieticket._id], callback);
  }

  suspendMovieTicket(request, respond) {
    var MovieTicketDetails = {
        "_id": parseInt(request.params._id),
      }

    movieticket.suspendMovieTicketTable(MovieTicketDetails, function(error, result){
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