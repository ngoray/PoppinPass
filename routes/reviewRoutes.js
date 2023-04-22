"use strict";

const ReviewController = require('../controllers/reviewController');
const reviewController = new ReviewController();

class ReviewRouter {

    routereview(app) {
    app.route('/review')
      .post(reviewController.addReview)
      .get(reviewController.getAllReview);
  }
}

module.exports = ReviewRouter;
