
const express = require("express");
const router = express.Router();

const portController = require("../controllers/port.controller");

//get all records
router.get("/", portController.getAllPort);

// get port by ID
router.get("/:id", portController.getPortByID);

// get ID for Update
router.get("/search/:wine", portController.getPortByWine);

// create new port
router.post("/", portController.createNewPort);

// update port
router.put("/:id", portController.updatePort);

// delete port
router.delete("/:id", portController.deletePort);

module.exports = router;
