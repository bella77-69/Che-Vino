// const express = require("express");
// const router = express.Router()
// const fs = require("fs");
// const whites = require ('../data/white.json');

// function listWhites() {
//     return JSON.parse(fs.readFileSync("./data/white.json", 'utf-8'));
// }

// function getWhitesById(id) {
//     const whiteArr = listWhites();
//     let filteredWhites = whiteArr.find(item => item.id === id);
//     return filteredWhites;
// }

// router.get("/", (req, res) => {
//     const whites = listWhites();
//     res.status(200).json(whites);
// });
// router
// .get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/white.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({message: 'error getting White Wine id data'});
//         }
//         const whiteData = JSON.parse(data);
//         const foundWhite = whiteData.find((data) => data.id === req.params.id);
//         if(!foundWhite) {
//             res.status(404).send({message: 'No White Wine found with the id'});
//         } else {
//             res.json(foundWhite);
//         }
//     });
// }
// )

// module.exports = router;

const express = require("express");
const router = express.Router();

const whiteController = require("../controllers/white.controller");

//get all records
router.get("/", whiteController.getAllUsers);

// get user by ID
router.get("/:id", whiteController.getUserByID);

// // get ID for Update
router.get("/:email", whiteController.getUserByEmail);

// // create new user
router.post("/", whiteController.createNewUser);

// update user
router.put("/:id", whiteController.updateUser);

// delete user
router.delete("/:id", whiteController.deleteUser);

module.exports = router;
