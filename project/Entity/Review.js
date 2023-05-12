'use strict';
var db = require('./../../dbconnection');

class Review {

  // add reviews
  addReviewTable(reviews, callback){

    var sql = "INSERT INTO poppinpass.reviews (name, email, rating, review) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [reviews.name, reviews.email, reviews.rating, reviews.review], callback);
}

  addReview(request, respond) {
    const reviewComment = {
      name: request.body.name,
      email: request.body.email,
      rating: request.body.rating,
      review: request.body.review,
    };

    console.log(reviewComment);

    review.addReviewTable(reviewComment, (error, result) => {
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
  viewAllReviewTable(callback) {
    var sql = "SELECT * FROM poppinpass.reviews";
    return db.query(sql, callback);
}

  viewAllReview(request, respond) {

    console.log("called");
    review.viewAllReviewTable((error, result) => {
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
