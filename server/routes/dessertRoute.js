const express = require("express");
const router = express.Router()

const fs = require("fs");

function listDessert() {
    return JSON.parse(fs.readFileSync("./data/dessert.json", 'utf-8'));
}

function getDessertById(id) {
    const dessertArr = listDessert();
    let filteredDessert = dessertArr.find(item => item.id === id);
    return filteredDessert;
}

router.get("/", (req, res) => {
    const dessert = listDessert();
    res.status(200).json(dessert);
});
router
.get('/dessert/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/dessert.json', 'utf-8', (err, data) => {
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