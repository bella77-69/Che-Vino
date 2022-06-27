const dbConn = require('../config/db.config');

const White = function (white) {
    this.name = white.name
    this.email = white.email;
    this.password = white.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
White.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM white", (err, res) => {
    if (err) {
      console.log("Error while fetching white wine", err);
      result(null, err);
    } else {
    //  console.log("White fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
White.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM white WHERE email = ?",
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
  White.createNewUser = (whiteReqData, result) => {
    dbConn.query(
      "INSERT INTO white SET ?",
      whiteReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("White user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  White.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM white WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  White.updateUser = (id, whiteReqData, result) => {
    dbConn.query(
      "UPDATE white SET name=?, email=? WHERE id = ?",
      [whiteReqData.name, whiteReqData.email, id],
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
  White.deleteUser = (id, result) => {
    dbConn.query("DELETE from white WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = White;