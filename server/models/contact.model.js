const dbConn = require('../config/db.config');

const Contacts = function (contact) {
    this.name = contact.name
    this.email = contact.email;
    this.comment = contact.comment;
}

//get all Contacts
Contacts.getAllContacts = (result) => {
  dbConn.query("SELECT * FROM contact", (err, res) => {
    if (err) {
      console.log("Error while fetching All Contacts", err);
      result(null, err);
    } else {
    //  console.log("Admin fetched successfully");
      result(null, res);
    }
  });
};


//get contact by email
Contacts.getByContactEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM contact WHERE email= ?",
    email,
    (err, res) => {
      if (err) {
       console.log("Error while fetching contact by email", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new contact
  Contacts.createNewContact = (CommentsReqData, result) => {
    dbConn.query(
      "INSERT INTO contact SET ?",
      CommentsReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("contact created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get contact by ID for update
  Contacts.getContactByID = (id, result) => {
    dbConn.query("SELECT * FROM contact WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching contact by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update contact
  Contacts.updateContact = (id, contactReqData, result) => {
    dbConn.query(
      "UPDATE contact SET name=?, email=?, comment=?  WHERE id = ?",
      [contactReqData.comment, contactReqData.name, contactReqData.email, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating Contact");
          result(null, err);
        } else {
          console.log("Contact updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete contact
  Contacts.deleteContact = (id, result) => {
    dbConn.query("DELETE from contact WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the contact");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Contacts;
  