const express = require("express");
const router = express.Router();

const dessertController = require("../controllers/dessert.controller");

//get all dessert
router.get("/", dessertController.getAllDessert);

// get dessert by ID
router.get("/:id", dessertController.getDessertByID);

// get ID for Update
router.get("/search/:wine", dessertController.getDessertByWine);

// create new dessert
router.post("/", dessertController.createNewDessert);

// update dessert
router.put("/:id", dessertController.updateDessert);

// delete dessert
router.delete("/:id", dessertController.deleteDessert);

module.exports = router;
