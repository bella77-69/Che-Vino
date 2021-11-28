const express = require("express");
const router = express.Router();
const fs = require("fs");
const rose = require=('./data/rose.json');

function listRose() {
  return JSON.parse(fs.readFileSync("./data/rose.json", 'utf-8'));
}

function getRedsById(id) {
  const roseArr = listRose();
  let filteredRose = roseArr.find(item => item.id === id);
  return filteredRose;
}

router.get("/", (req, res) => {
  const rose = listRose();
  res.status(200).json(rose);
});



router   .get('/rose/:id', (req, res) => {
    const rose = getRose();
    const { id } = req.params;

    const foundRose = rose.find((rose) => {
      if (rose.id === id) {
        return true;
      } else {
        return false;
      }
    });

    if (!foundRose) {
      return res
        .status(404)
        .json({ message: `Unable to find rose with id of ${id}` });
    }

    return res.json(foundRose);
  })

  module.exports = router;