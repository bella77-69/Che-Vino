// const express = require("express");
// const router = express.Router()
// const fs = require("fs");

// function listDessert() {
//     return JSON.parse(fs.readFileSync("./data/dessert.json", 'utf-8'));
// }

// function getDessertById(id) {
//     const dessertArr = listDessert();
//     let filteredDessert = dessertArr.find(item => item.id === id);
//     return filteredDessert;
// }

// router.get("/", (req, res) => {
//     const dessert = listDessert();
//     res.status(200).json(dessert);
// });
// router
// .get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/dessert.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({message: 'error getting Dessert wine id data'});
//         }
//         const dessertData = JSON.parse(data);
//         const foundDessert = dessertData.find((data) => data.id == req.params.id);
//         if(!foundDessert) {
//             res.json({message: 'No Dessert Wine found with the id'});
//         } else {
//             res.json(foundDessert);
//         }
//     });
// }
// )

// module.exports = router;

const express = require("express");
const router = express.Router();

const dessertController = require("../controllers/dessert.controller");

//get all records
router.get("/", dessertController.getAllUsers);

// get user by ID
router.get("/:id", dessertController.getUserByID);

// // get ID for Update
router.get("/:email", dessertController.getUserByEmail);

// // create new user
router.post("/", dessertController.createNewUser);

// update user
router.put("/:id", dessertController.updateUser);

// delete user
router.delete("/:id", dessertController.deleteUser);

module.exports = router;
