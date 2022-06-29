const express = require("express");
const router = express.Router();

const whiteController = require("../controllers/white.controller");

//get all records
router.get("/", whiteController.getAllWhite);

// get white by ID
router.get("/:id", whiteController.getWhiteByID);

// get ID for Update
router.get("/search/:wine", whiteController.getWhiteByWine);

// create new white
router.post("/", whiteController.createNewWhite);

// update white
router.put("/:id", whiteController.updateWhite);

// delete white
router.delete("/:id", whiteController.deleteWhite);

module.exports = router;
