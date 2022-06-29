const express = require("express");
const router = express.Router();

const sparklingController = require("../controllers/sparkling.controller");

//get all records
router.get("/", sparklingController.getAllSparkling);

// get sparkling by ID
router.get("/:id", sparklingController.getSparklingByID);

// get ID for Update
router.get("/search/:wine", sparklingController.getSparklingByWine);

// create new sparkling
router.post("/", sparklingController.createNewSparkling);

// update sparkling
router.put("/:id", sparklingController.updateSparkling);

// delete sparkling
router.delete("/:id", sparklingController.deleteSparkling);

module.exports = router;
