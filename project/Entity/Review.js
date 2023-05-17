'use strict';
var db = require('./../../dbconnection');

class Review {

  // add reviews
  addReview(request, respond) {
    const reviewComment = {
      name: request.body.name,
      email: request.body.email,
      rating: request.body.rating,
      review: request.body.review,
    };
  
    var sql = "INSERT INTO poppinpass.reviews (name, email, rating, review) VALUES (?, ?, ?, ?)";
  
    db.query(sql, [reviewComment.name, reviewComment.email, reviewComment.rating, reviewComment.review], function(error, result) {
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
  

// view all reviews
viewAllReview(request, respond) {
  var sql = "SELECT * FROM poppinpass.reviews";
  
  db.query(sql, function(error, result) {
    console.log("called");

    if (error) {
      respond.json(error);
    } else {
      respond.json(result);
    }
  });
}

}
const review = new Review;
module.exports = Review;
