const ReviewModel = require("../models/review.model");

// get all reviews
exports.getAllReviews = (req, res) => {
  //console.log('here all users list');
  ReviewModel.getAllReviews((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get review by price
exports.getReviewByPrice = (req, res) => {
  ReviewModel.getReviewByPrice(req.params.price, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new review
  exports.createNewReview = (req, res) => {
    const reviewReqData = new ReviewModel(req.body);
   // console.log("adminReqData", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      ReviewModel.createNewReview(reviewReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Review Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get review by ID  for Update
  exports.getReviewByID = (req, res) => {
    //console.log('get user by id');
    ReviewModel.getReviewByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update review
  exports.updateReview = (req, res) => {
    const reviewReqData = new ReviewModel(req.body);
  //  console.log("adminReqData update", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      ReviewModel.updateReview(
        req.params.id,
        reviewReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "review updated Successfully" });
        }
      );
    }
  };
  
  // delete review
  exports.deleteReview = (req, res) => {
    ReviewModel.deleteReview(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "review deleted successully!" });
    });
  };