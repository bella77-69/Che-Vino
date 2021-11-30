const express = require("express");
const router = express.Router()
const fs = require("fs");


function listReviews() {
    return JSON.parse(fs.readFileSync('./data/reviews.json', 'utf-8'));
}

function getReviewsById(id) {
    const reviewArr = listReviews();
    let filteredReviews = reviewArr.find(item => item.id === id);
    return filteredReviews;
}

function addReview(body) {
    const reviewArr = listReviews();
    const review = new Review(body.wine, body.name, body.comment);
    reviewArr.push(review)

    fs.writeFileSync(listReviews())
    return review;
}

function Review(wine, name, comment) {
    this.id = uuidv4();
    this.wine = wine;
    this.name = name;
    this.comment = comment;
}

router.get("/", (req, res) => {
    const reviews = listReviews();
    res.status(200).json(reviews);
});

router
.get('/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/reviews.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting review id data'});
        }
        const reviewData = JSON.parse(data);
        const foundReview = reviewData.find((review) => review.id === req.params.id);
        if(!foundReview) {
            res.status(404).send({message: 'No review found with the id'});
        } else {
            res.json(foundReview);
        }
    });
}
)
module.exports = router;


