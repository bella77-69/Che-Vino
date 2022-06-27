const dbConn = require('../config/db.config');

const Red = function (red) {
    this.name = red.name
    this.email = red.email;
    this.password = red.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
Red.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM red", (err, res) => {
    if (err) {
      console.log("Error while fetching Red", err);
      result(null, err);
    } else {
    //  console.log("Red fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
Red.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM red WHERE email = ?",
    email,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by email", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new user
  Red.createNewUser = (redReqData, result) => {
    dbConn.query(
      "INSERT INTO red SET ?",
      redReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Red user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  Red.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM red WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Red.updateUser = (id, redReqData, result) => {
    dbConn.query(
      "UPDATE red SET name=?, email=? WHERE id = ?",
      [redReqData.name, redReqData.email, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating user");
          result(null, err);
        } else {
          console.log("user updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete user
  Red.deleteUser = (id, result) => {
    dbConn.query("DELETE from red WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Red;
  