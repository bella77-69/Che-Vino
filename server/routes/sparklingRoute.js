const express = require("express");
const router = express.Router()

const fs = require("fs");

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