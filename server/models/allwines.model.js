const dbConn = require('../config/db.config');

const AllWines = function (all) {
    this.name = all.name
    this.email = all.email;
    this.password = all.password;
    // this.confirmPassword = user.confirmPassword;
}

//get all Guests
AllWines.getAllUsers = (result) => {
  dbConn.query("SELECT * FROM allwines", (err, res) => {
    if (err) {
      console.log("Error while fetching allwines", err);
      result(null, err);
    } else {
    //  console.log("Admin fetched successfully");
      result(null, res);
    }
  });
};


//get user by email
AllWines.getUserByEmail = (email, result) => {
  dbConn.query(
    "SELECT * FROM allwines WHERE email = ?",
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
  AllWines.createNewUser = (allwinesReqData, result) => {
    dbConn.query(
      "INSERT INTO allwines SET ?",
      allwinesReqData,
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
  AllWines.getUserByID = (id, result) => {
    dbConn.query("SELECT * FROM allwines WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching user by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update user
 AllWines.updateUser = (id, allwinesReqData, result) => {
    dbConn.query(
      "UPDATE allwines SET name=?, email=? WHERE id = ?",
      [allwinesReqData.name, allwinesReqData.email, id],
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
  AllWines.deleteUser = (id, result) => {
    dbConn.query("DELETE from allwines WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the user");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = AllWines;
  