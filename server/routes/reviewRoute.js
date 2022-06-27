// const express = require("express");
// const router = express.Router()
// const fs = require("fs");
// const { v4: uuidv4} = require('uuid');
// const path = require('path');

// const reviewFile = path.join(__dirname, '../data/newReviews.json');

// function listReviews() {
//     return JSON.parse(fs.readFileSync('./data/reviews.json', 'utf-8'));
// }

// function getReviewsById(id) {
//     const reviewArr = listReviews();
//     let filteredReviews = reviewArr.find(item => item.id === id);
//     return filteredReviews;
// }

// function addReview(body) {
//     const reviewArr = listReviews();
//     const review = new Review(body.name, body.email, body.comment);
//     reviewArr.push(review)

//     fs.writeFileSync(reviewFile, JSON.stringify(reviewArr));
//     return review;
// }

// function Review(name, email, comment) {
//     this.id = uuidv4();
//     this.name = name;
//     this.email = email;
//     this.comment = comment;
// }

// router.get("/", (req, res) => {
//     const reviews = listReviews();
//     res.status(200).json(reviews);
// })

// router.get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/reviews.json', 'utf-8',(err, data) => {
//         if(err) {
//             console.log(err);
//             res.json({message: 'error getting review id data'});
//         }
//         const reviewData = JSON.parse(data);
//         const foundReview = reviewData.find((data) => data.id == req.params.id);
//         if(!foundReview) {
//             res.json({message: 'error getting review data'});
//         } else {
//             res.json(foundReview);
//         }
//     });
// })

// let comments = [];

// router.post('/', (req, res) => {
//     const newComment = {
//         name: req.body.name,
//         email: req.body.email,
//         comment: req.body.comment
//     }
//     if(!req.body.name || !req.body.email || !req.body.comment) {
//         res.status(400).json ({
//             error: "POST body must contain all required properties",
//             requiredProperties: ['name', 'email', 'comment'],
//         });
//     }
//     comments.push(newComment);
//     console.log(comments)
//     res.json(addReview(req.body));
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review.controller");

//get all records
router.get("/", reviewController.getAllReviews);

// get user by ID
router.get("/:id", reviewController.getReviewByID);

// // get ID for Update
router.get("/:email", reviewController.getReviewByEmail);

// // create new user
router.post("/", reviewController.createNewReview);

// update user
router.put("/:id", reviewController.updateReview);

// delete user
router.delete("/:id", reviewController.deleteReview);

module.exports = router;

