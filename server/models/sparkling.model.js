const dbConn = require('../config/db.config');

const Sparkling = function (sparking) {
    this.name = sparking.name
    this.email = sparking.email;
    this.password = sparking.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
Sparkling.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM sparkling", (err, res) => {
    if (err) {
      console.log("Error while fetching sparkling", err);
      result(null, err);
    } else {
    //  console.log("Sparkling fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
Sparkling.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM sparkling WHERE email = ?",
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
  Sparkling.createNewUser = (sparklingReqData, result) => {
    dbConn.query(
      "INSERT INTO sparkling SET ?",
      sparklingReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("admin user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  Sparkling.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM sparkling WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Sparkling.updateUser = (id, sparklingReqData, result) => {
    dbConn.query(
      "UPDATE sparkling SET name=?, email=? WHERE id = ?",
      [sparklingReqData.name, sparklingReqData.email, id],
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
  Sparkling.deleteUser = (id, result) => {
    dbConn.query("DELETE from sparkling WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Sparkling;
  