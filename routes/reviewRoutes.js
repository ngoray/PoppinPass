"use strict";

const Review = require('./../project/Entity/Review');
const review = new Review();

class ReviewRoute {

    routereview(app) {
    app.route('/review')
      .post(review.addReview)
      .get(review.viewAllReview);
  }
}

module.exports = ReviewRoute;
