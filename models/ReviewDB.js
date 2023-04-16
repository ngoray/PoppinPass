var db = require('../dbconnection');

class ReviewDB{

    addReview(reviews, callback){

        console.log("Username: "+ reviews.name);
        console.log("Email: " + reviews.email);
        console.log("Rating: "+reviews.rating);
        console.log("Review: "+reviews.review);
        var sql = "INSERT INTO poppinpass.reviews (name, email, rating, review) VALUES (?, ?, ?, ?)";
        
        db.query(sql, [reviews.name,reviews.email, reviews.rating, reviews.review], callback);
    }

    getAllReview(callback) {
        var sql = "SELECT * FROM poppinpass.reviews";
        return db.query(sql, callback);
    }
}
module.exports = ReviewDB;