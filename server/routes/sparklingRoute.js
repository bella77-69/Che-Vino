const express = require("express");
const router = express.Router()
const fs = require("fs");
const sparkling = require('../data/sparkling.json');

function listSparkling() {
    return JSON.parse(fs.readFileSync("./data/sparkling.json", 'utf-8'));
}

function getSparklingById(id) {
    const sparklingArr = listSparkling();
    let filteredSparkling = sparklingArr.find(item => item.id === id);
    return filteredSparkling;
}

router.get("/", (req, res) => {
    const sparkling = listSparkling();
    res.status(200).json(sparkling);
});

router
.get('/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/sparkling.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting sparking wine id data'});
        }
        const sparklingData = JSON.parse(data);
        const foundSparkling = sparklingData.find((data) => data.id === req.params.id);
        if(!foundSparkling) {
            res.status(404).send({message: 'No Sparkling found with the id'});
        } else {
            res.json(foundSparkling);
        }
    });
}
)

module.exports = router;