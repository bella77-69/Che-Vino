const dbConn = require('../config/db.config');

const Red = function (red) {
  this.winery = red.winery;
  this.wine = red.wine;
  // this.rating = red.rating.average;
  this.location = red.location;
}

//get all red
Red.getAllRed = (result) => {
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


//get red by wine
Red.getRedByWine = (wine, result) => {
  dbConn.query(
    "SELECT * FROM red WHERE wine = ?",
    wine,
    (err, res) => {
      if (err) {
       console.log("Error while fetching red by wine", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new red
  Red.createNewRed = (redReqData, result) => {
    dbConn.query(
      "INSERT INTO red SET ?",
      redReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Red created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get red by ID for update
  Red.getRedByID = (id, result) => {
    dbConn.query("SELECT * FROM red WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching red by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update red
  Red.updateRed = (id, redReqData, result) => {
    dbConn.query(
      "UPDATE red SET winery=?, wine=?, location=? WHERE id = ?",
      [redReqData.winery, redReqData.wine, redReqData.location, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating red");
          result(null, err);
        } else {
          console.log("red updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete red
  Red.deleteRed = (id, result) => {
    dbConn.query("DELETE from red WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the red");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Red;
  