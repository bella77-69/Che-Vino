const dbConn = require('../config/db.config');

const Review = function (review) {
    this.name = review.name;
    this.email = review.email;
    this.comment = review.comment;
    // this.confirmPassword = user.confirmPassword;
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


//get review by email
Review.getReviewByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM review WHERE email = ?",
    email,
    (err, res) => {
      if (err) {
       console.log("Error while fetching review by email", err);
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
      "UPDATE review SET name=?, email=?, comment=?, WHERE id = ?",
      [reviewReqData.name, reviewReqData.email, reviewReqData.comment, id],
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
  