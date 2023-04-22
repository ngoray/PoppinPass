'use strict';
const ReviewDB = require('../models/ReviewDB');
const reviewDB = new ReviewDB();

class ReviewController {

  addReview(request, respond) {
    const reviewComment = {
      name: request.body.name,
      email: request.body.email,
      rating: request.body.rating,
      review: request.body.review,
    };

    console.log(reviewComment);

    reviewDB.addReview(reviewComment, (error, result) => {
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

  getAllReview(request, respond) {
    reviewDB.getAllReview((error, result) => {
      if (error) {
        respond.json(error);
      } else {
        respond.json(result);
      }
    });
  }
}

module.exports = ReviewController;
