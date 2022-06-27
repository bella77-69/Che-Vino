// const express = require("express");
// const router = express.Router()
// const fs = require("fs");

// function listReds() {
//     return JSON.parse(fs.readFileSync("./data/red.json", 'utf-8'));  
// }

// function getRedsById(id) {
//     const redArr = listReds();
//     let filteredReds = redArr.find(item => item.id === id);
//     return filteredReds;
// }

// router.get("/", (req, res) => {
//     const reds = listReds();
//     res.status(200).json(reds);
// });


// router
// .get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/red.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({message: 'error getting red wine id data'});
//         }
//         const redData = JSON.parse(data);
//         const foundRed = redData.find((data) => data.id == req.params.id);
//         if(!foundRed) {
//             res.status(404).send({message: 'No wine found with the id'});
//         } else {
//             res.json(foundRed);
//         }
//     });
// }
// )

// module.exports = router;

const express = require("express");
const router = express.Router();

const redController = require("../controllers/red.controller");

//get all records
router.get("/", redController.getAllUsers);

// get user by ID
router.get("/:id", redController.getUserByID);

// // get ID for Update
router.get("/:email", redController.getUserByEmail);

// // create new user
router.post("/", redController.createNewUser);

// update user
router.put("/:id", redController.updateUser);

// delete user
router.delete("/:id", redController.deleteUser);

module.exports = router;
