const express = require("express");
const router = express.Router();

const redController = require("../controllers/red.controller");

//get all records
router.get("/", redController.getAllRed);

// get red by ID
router.get("/:id", redController.getRedByID);

// get ID for Update
router.get("/search/:wine", redController.getRedByWine);

// create new red
router.post("/", redController.createNewRed);

// update red
router.put("/:id", redController.updateRed);

// delete red
router.delete("/:id", redController.deleteRed);

module.exports = router;
