// const express = require("express");
// const router = express.Router()
// const fs = require("fs");
// const sparkling = require('../data/sparkling.json');

// function listSparkling() {
//     return JSON.parse(fs.readFileSync("./data/sparkling.json", 'utf-8'));
// }

// function getSparklingById(id) {
//     const sparklingArr = listSparkling();
//     let filteredSparkling = sparklingArr.find(item => item.id === id);
//     return filteredSparkling;
// }

// router.get("/", (req, res) => {
//     const sparkling = listSparkling();
//     res.status(200).json(sparkling);
// });

// router
// .get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/sparkling.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({message: 'error getting sparking wine id data'});
//         }
//         const sparklingData = JSON.parse(data);
//         const foundSparkling = sparklingData.find((data) => data.id === req.params.id);
//         if(!foundSparkling) {
//             res.status(404).send({message: 'No Sparkling found with the id'});
//         } else {
//             res.json(foundSparkling);
//         }
//     });
// }
// )

// module.exports = router;

const express = require("express");
const router = express.Router();

const sparklingController = require("../controllers/sparkling.controller");

//get all records
router.get("/", sparklingController.getAllUsers);

// get user by ID
router.get("/:id", sparklingController.getUserByID);

// // get ID for Update
router.get("/:email", sparklingController.getUserByEmail);

// // create new user
router.post("/", sparklingController.createNewUser);

// update user
router.put("/:id", sparklingController.updateUser);

// delete user
router.delete("/:id", sparklingController.deleteUser);

module.exports = router;
