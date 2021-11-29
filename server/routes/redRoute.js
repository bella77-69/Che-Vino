const express = require("express");
const router = express.Router()
const fs = require("fs");
const reds = require('../data/red.json');

function listReds() {
    return JSON.parse(fs.readFileSync("./data/red.json", 'utf-8'));
}

function getRedsById(id) {
    const redArr = listReds();
    let filteredReds = redArr.find(item => item.id === id);
    return filteredReds;
}

router.get("/", (req, res) => {
    const reds = listReds();
    res.status(200).json(reds);
<<<<<<< HEAD
})


router
.get('/reds/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/red.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting red wine id data'});
        }
        const redData = JSON.parse(data);
        const foundRed = redData.find((red) => red.id == req.params.id);
        if(!foundRed) {
            res.status(404).send({message: 'No wine found with the id'});
        } else {
            res.json(foundRed);
        }
    });
}
)
=======
});
router
.get('/reds/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/red.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting red wine id data'});
        }
        const redData = JSON.parse(data);
        const foundRed = redData.find((red) => red.id == req.params.id);
        if(!foundRed) {
            res.status(404).send({message: 'No wine found with the id'});
        } else {
            res.json(foundRed);
        }
    });
}
)


>>>>>>> main

module.exports = router;