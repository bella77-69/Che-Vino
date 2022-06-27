const dbConn = require('../config/db.config');

const Dessert = function (dessert) {
    this.name = dessert.name
    this.email = dessert.email;
    this.password = dessert.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
Dessert.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM dessert", (err, res) => {
    if (err) {
      console.log("Error while fetching dessert", err);
      result(null, err);
    } else {
    //  console.log("Admin fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
Dessert.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM dessert WHERE email = ?",
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
  Dessert.createNewUser = (dessertReqData, result) => {
    dbConn.query(
      "INSERT INTO dessert SET ?",
      dessertReqData,
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
  Dessert.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM dessert WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
  Dessert.updateUser = (id, dessertReqData, result) => {
    dbConn.query(
      "UPDATE dessert SET name=?, email=? WHERE id = ?",
      [dessertReqData.name, dessertReqData.email, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating dessert");
          result(null, err);
        } else {
          console.log("dessert updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete user
 Dessert.deleteUser = (id, result) => {
    dbConn.query("DELETE from dessert WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the dessert data");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Dessert;
  