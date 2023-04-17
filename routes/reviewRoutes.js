"use strict"

const reviewControllers = require('../controllers/reviewController');

function routereview(app) {

    app.route('/review')
    .post(reviewControllers.addReview)
    .get(reviewControllers.getAllReview);

}

module.exports =  {routereview};