const express = require("express");
const router = express.Router();
const fs = require("fs");


function listRose() {
  return JSON.parse(fs.readFileSync("./data/rose.json", 'utf-8'));
}

function getRosesById(id) {
  const roseArr = listRose();
  let filteredRose = roseArr.find(item => item.id === id);
  return filteredRose;
}

router.get("/", (req, res) => {
  const rose = listRose();
  res.status(200).json(rose);
});

router
.get('/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/rose.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting rose id data'});
        }
        const roseData = JSON.parse(data);
        const foundRose = roseData.find((data) => data.id === req.params.id);
        if(!foundRose) {
            res.status(404).send({message: 'No rose wine found with the id'});
        } else {
            res.json(foundRose);
        }
    });
}
)

module.exports = router;