const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact.controller");

//get all contacts
router.get("/", contactController.getAllContacts);

// get contact by ID
router.get("/:id", contactController.getContactByID);

// get name for Update
router.get("/search/:email", contactController.getByContactEmail);

// create new contact
router.post("/", contactController.createNewContact);

// update contact
router.put("/:id", contactController.updateContact);

// delete contact
router.delete("/:id", contactController.deleteContact);

module.exports = router;