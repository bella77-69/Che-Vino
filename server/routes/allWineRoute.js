// const express = require("express");
// const router = express.Router()
// const fs = require("fs");
// const { v4: uuidv4} = require('uuid');
// const path = require('path');

// const allWineFile = path.join(__dirname, '../data/newWines.json');

// function listAllWines() {
//     return JSON.parse(fs.readFileSync('./data/allWines.json', 'utf-8'));
// }

// function getWineById(id) {
//     const allArr = listAllWines();
//     let filteredWine = allArr.find(item => item.id === id);
//     return filteredWine;
// }

// function addWine(body) {
//     const allArr = listAllWines();
//     const all = new allWine(body.winery, body.wine, body.rating, body.average, body.reviews, body.location, body.image);
//     allArr.push(all)

//     fs.writeFileSync(allWineFile, JSON.stringify(allArr));
//     return all;
// }

// function allWine(winery, wine, rating, average, reviews, location, image) {
//     this.id = uuidv4();
//     this.winery = winery;
//     this.wine = wine;
//     this.rating = rating;
//     this.average = average;
//     this.reviews = reviews;
//     this.location = location;
//     this.image = image;
// }

// router.get("/", (req, res) => {
//     const allWines = listAllWines();
//     res.status(200).json(allWines);
// })

// router.get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/allWines.json', 'utf-8',(err, data) => {
//         if(err) {
//             console.log(err);
//             res.json({message: 'error getting wine id data'});
//         }
//         const allWineData = JSON.parse(data);
//         const foundWine = allWineData.find((data) => data.id == req.params.id);
//         if(!foundWine) {
//             res.json({message: 'error getting wine data'});
//         } else {
//             res.json(foundWine);
//         }
//     });
// })

// let wine = [];

// router.post('/', (req, res) => {
//     const newWine = {
//         winery: req.body.winery,
//         wine: req.body.wine,
//         rating: req.body.rating,
//         average: req.body.average,
//         reviews: req.body.reviews,
//         location: req.body.location,
//         image: req.body.image
//     }
//     if(!req.body.winery || !req.body.wine || !req.body.rating || !req.body.average || !req.body.reviews || !req.body.location || !req.body.image) {
//         res.status(400).json ({
//             error: "POST body must contain all required properties",
//             requiredProperties: ['winery', 'wine', 'rating', 'average', 'reviews', 'location', 'image'],
//         });
//     }
//     wine.push(newWine);
//     console.log(wine)
//     res.json(addWine(req.body));
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

const allwinesController = require("../controllers/allwines.controller");

//get all records
router.get("/", allwinesController.getAllUsers);

// get user by ID
router.get("/:id", allwinesController.getUserByID);

// // get ID for Update
router.get("/:email", allwinesController.getUserByEmail);

// // create new user
router.post("/", allwinesController.createNewUser);

// update user
router.put("/:id", allwinesController.updateUser);

// delete user
router.delete("/:id", allwinesController.deleteUser);

module.exports = router;

