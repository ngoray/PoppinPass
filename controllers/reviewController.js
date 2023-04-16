"use strict"

const CommentDB = require('../models/ReviewDB');
const jwt = require('jsonwebtoken');

var CommentDB = new CommentDB();

function addReview(request,respond) {

    var reviewComment = {
        "name":request.body.username,
        "email": request.body.email,
        "rating":request.body.password,
        "review": request.body.review
    };
    console.log(reviewComment);
    commentDB.addReview(reviewComment, function (error, result) {
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

module.exports = {addReview};