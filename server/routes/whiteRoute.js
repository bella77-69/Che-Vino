const express = require("express");
const router = express.Router()

const fs = require("fs");

function listWhites() {
    return JSON.parse(fs.readFileSync("./data/white.json", 'utf-8'));
}

function getWhitesById(id) {
    const whiteArr = listWhites();
    let filteredWhites = whiteArr.find(item => item.id === id);
    return filteredWhites;
}

router.get("/", (req, res) => {
    const whites = listWhites();
    res.status(200).json(whites);
});
// router
// .get('/reds:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/red.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({message: 'error getting red wine id data'});
//         }
//         const redData = JSON.parse(data);
//         const foundRed = redData.find((red) => red.id === req.params.id);
//         if(!foundRed) {
//             res.status(404).send({message: 'No wine found with the id'});
//         } else {
//             res.json(foundRed);
//         }
//     });
// }
// )

module.exports = router;