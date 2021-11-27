const express = require("express");
const router = express.Router();
const fs = require("fs");

function getRose() {
  return JSON.parse(fs.readFileSync("./data/rose.json", "utf-8"));
}

// function getUsers() {
//   return JSON.parse(fs.readFileSync("./data/users.json"));
// }

router
  .get("/", (req, res) => {
    const rose = getRose();
    
    // const users = getUsers();

    const findRose = rose.find((rose) => rose.id === req.decoded.id) 

    const favoriteRoseId = findRose.favoriteRose
    //console.log("favorite rose of current rose -- object", favoriteRoseId)

    //---

    const favoriteRose = [];

    for ( const foundId of favoriteRoseId) {
     const favoriteRose = rose.find((rose) => {
       return( rose.id === foundId.id)
    })
    favoriteRose.push(favoriteRose)
 }
   
    const getResponse = [ favoriteRose, rose]

    //console.log(getResponse)
    res.json(getResponse)

  })

  .get("/rose/:id", (req, res) => {
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