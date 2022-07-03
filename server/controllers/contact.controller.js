const ContactModel = require("../models/contact.model");

// get all contacts list
exports.getAllContacts = (req, res) => {
  //console.log('here all users list');
  ContactModel.getAllContacts((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get contact by email
exports.getByContactEmail= (req, res) => {
  ContactModel.getByContactEmail(req.params.email, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new contact
  exports.createNewContact = (req, res) => {
    const contactReqData = new ContactModel(req.body);
   // console.log("AllWinesReqData", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      ContactModel.createNewContact(contactReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Contact Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get contact by ID  for Update
  exports.getContactByID = (req, res) => {
    //console.log('get user by id');
    ContactModel.getContactByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update contact
  exports.updateContact = (req, res) => {
    const contactReqData = new ContactModel(req.body);
  //  console.log("AllWinesReqData update", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      ContactModel.updateContact(
        req.params.id,
        contactReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "Contact updated Successfully" });
        }
      );
    }
  };
  
  // delete contact
  exports.deleteContact = (req, res) => {
    ContactModel.deleteContact(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Contact deleted successully!" });
    });
  };