const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review.controller");

//get all records
router.get("/", reviewController.getAllReviews);

// get review by ID
router.get("/:id", reviewController.getReviewByID);

// get ID for Update
router.get("/search/:price", reviewController.getReviewByPrice);

// create new review
router.post("/", reviewController.createNewReview);

// update review
router.put("/:id", reviewController.updateReview);

// delete review
router.delete("/:id", reviewController.deleteReview);

module.exports = router;

