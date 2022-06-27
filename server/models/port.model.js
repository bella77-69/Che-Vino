const dbConn = require('../config/db.config');

const Port = function (port) {
    this.name = port.name
    this.email = port.email;
    this.password = port.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
Port.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM port", (err, res) => {
    if (err) {
      console.log("Error while fetching Port", err);
      result(null, err);
    } else {
    //  console.log("Port fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
Port.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM port WHERE email = ?",
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
  Port.createNewUser = (portReqData, result) => {
    dbConn.query(
      "INSERT INTO port SET ?",
      portReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Port user created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get user by ID for update
  Port.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM port WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Port.updateUser = (id, portReqData, result) => {
    dbConn.query(
      "UPDATE port SET name=?, email=? WHERE id = ?",
      [portReqData.name, portReqData.email, id],
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
  Port.deleteUser = (id, result) => {
    dbConn.query("DELETE from port WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Port;
  