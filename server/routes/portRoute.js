// const express = require("express");
// const router = express.Router()
// const fs = require("fs");

// function listPort() {
//     return JSON.parse(fs.readFileSync("./data/port.json", 'utf-8'));
// }

// function getPortById(id) {
//     const portArr = listPort();
//     let filteredPort = portArr.find(item => item.id === id);
//     return filteredPort;
// }

// router.get("/", (req, res) => {
//     const port = listPort();
//     res.status(200).json(port);
// });
// router
// .get('/:id', (req, res) => {
//     console.log(req.params.id);
//     fs.readFile('./data/port.json', 'utf-8', (err, data) => {
//         if (err) {
//             console.log(err);
//             res.json({message: 'error getting Port Wine id data'});
//         }
//         const portData = JSON.parse(data);
//         const foundPort = portData.find((data) => data.id === req.params.id);
//         if(!foundPort) {
//             res.status(404).send({message: 'No Port Wine found with the id'});
//         } else {
//             res.json(foundPort);
//         }
//     });
// }
// )

// module.exports = router;

const express = require("express");
const router = express.Router();

const portController = require("../controllers/port.controller");

//get all records
router.get("/", portController.getAllUsers);

// get user by ID
router.get("/:id", portController.getUserByID);

// // get ID for Update
router.get("/:email", portController.getUserByEmail);

// // create new user
router.post("/", portController.createNewUser);

// update user
router.put("/:id", portController.updateUser);

// delete user
router.delete("/:id", portController.deleteUser);

module.exports = router;
