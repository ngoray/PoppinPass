"use strict"

const ReviewDB = require('../models/ReviewDB');

var reviewDB = new ReviewDB();

function addReview(request,respond) {

    var reviewComment = {
        "name":request.body.name,
        "email": request.body.email,
        "rating":request.body.rating,
        "review": request.body.review
    };
    console.log(reviewComment);
    reviewDB.addReview(reviewComment, function (error, result) {
        console.log(result)
        if (error) {
            respond.json({
                "message": "Something went wrong",
                error
            });
        }
        else {
            respond.json(result);
        }
    });
}

function getAllReview(request, respond) {

    reviewDB.getAllReview(function (error, result){

        if (error) {
            respond.json(error);
        } else {

            respond.json(result);
        }
    });
}

module.exports = {addReview, getAllReview};