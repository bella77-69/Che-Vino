const express = require("express");
const router = express.Router();

const roseController = require("../controllers/rose.controller");

//get all records
router.get("/", roseController.getAllRose);

// get rose by ID
router.get("/:id", roseController.getRoseByID);

// get ID for Update
router.get("/search/:wine", roseController.getRoseByWine);

// create new rose
router.post("/", roseController.createNewRose);

// update rose
router.put("/:id", roseController.updateRose);

// delete rose
router.delete("/:id", roseController.deleteRose);

module.exports = router;
