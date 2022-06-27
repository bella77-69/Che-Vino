const dbConn = require('../config/db.config');

const Rose = function (rose) {
    this.name = rose.name
    this.email = rose.email;
    this.password = rose.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
Rose.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM rose", (err, res) => {
    if (err) {
      console.log("Error while fetching Rose", err);
      result(null, err);
    } else {
    //  console.log("Rose fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
Rose.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM rose WHERE email = ?",
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
  Rose.createNewUser = (roseReqData, result) => {
    dbConn.query(
      "INSERT INTO rose SET ?",
      roseReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Rose user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  Rose.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM rose WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Rose.updateUser = (id, roseReqData, result) => {
    dbConn.query(
      "UPDATE rose SET name=?, email=? WHERE id = ?",
      [roseReqData.name, roseReqData.email, id],
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
  Rose.deleteUser = (id, result) => {
    dbConn.query("DELETE from rose WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Rose;
  