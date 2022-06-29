const dbConn = require('../config/db.config');

const Review = function (review) {
  this.wine = review.wine;
  this.style = review.style;
  this.rating = review.rating;
  this.price = review.price;
  this.review = review.review;
}

//get all reviews
Review.getAllReviews = (result) => {
  dbConn.query("SELECT * FROM review", (err, res) => {
    if (err) {
      console.log("Error while fetching Review", err);
      result(null, err);
    } else {
    //  console.log("Review fetched successfully");
      result(null, res);
    }
  });
};


//get review by price
Review.getReviewByPrice = (price, result) => {
  dbConn.query(
    "SELECT * FROM review WHERE price = ?",
    price,
    (err, res) => {
      if (err) {
       console.log("Error while fetching review by price", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new review
  Review.createNewReview = (reviewReqData, result) => {
    dbConn.query(
      "INSERT INTO review SET ?",
      reviewReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting review");
          result(null, err);
        } else {
          console.log("Review created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get review by ID for update
  Review.getReviewByID = (id, result) => {
    dbConn.query("SELECT * FROM review WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching review by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update review
  Review.updateReview = (id, reviewReqData, result) => {
    dbConn.query(
      "UPDATE review SET wine=?, style=?, rating=?, price=?, review=? WHERE id = ?",
      [reviewReqData.wine, reviewReqData.style, reviewReqData.rating, reviewReqData.price, reviewReqData.review, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating review");
          result(null, err);
        } else {
          console.log("review updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete review
  Review.deleteReview = (id, result) => {
    dbConn.query("DELETE from review WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the review");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Review;
  