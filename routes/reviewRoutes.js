"use strict"

const reviewControllers = require('../controllers/reviewController');

function routereview(app) {

    app.route('/addreview')
    .post(reviewControllers.addReview);

}

module.exports =  {routereview};