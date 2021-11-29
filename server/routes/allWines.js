const { timeStamp } = require("console");
const express = require("express");
const router = express.Router()

const fs = require("fs");

function listDessert() {
    return JSON.parse(fs.readFileSync("./data/allWines.json", 'utf-8'));
}

function getDessertById(id) {
    const dessertArr = listDessert();
    let filteredDessert = dessertArr.find(item => item.id === id);
    return filteredDessert;
}

function addWine(body) {
    const wineArr = listDessert();
    const wine = new Wine(body.winery, body.wine, body.location, body.image, body.rating, body.reviews);
    wineArr.push(wine)

    fs.writeFileSync(listDessert())
    return wine;
}

function Wine(winery, wine, location, image, rating, average, reviews) {
    this.id = uuidv4();
    this.winery = winery;
    this.wine = wine;
    this.location = location;
    this.image = image;
    this.rating = rating;
    this.average = average;
    this.reviews = reveiws;
}

router.get("/", (req, res) => {
    const dessert = listDessert();
    res.status(200).json(dessert);
});
router
.get('/wines/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/allWines.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting red wine id data'});
        }
        const redData = JSON.parse(data);
        const foundRed = redData.find((red) => red.id === req.params.id);
        if(!foundRed) {
            res.status(404).send({message: 'No wine found with the id'});
        } else {
            res.json(foundRed);
        }
    });
}
)

module.exports = router;