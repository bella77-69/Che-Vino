const dbConn = require('../config/db.config');

const Sparkling = function (sparking) {
  this.winery = sparking.winery;
  this.wine = sparking.wine;
  // this.rating = sparking.rating.average;
  this.location = sparking.location;
}

//get all Sparkling
Sparkling.getAllSparkling = (result) => {
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


//get sparkling by wine
Sparkling.getSparklingByWine = (wine, result) => {
  dbConn.query(
    "SELECT * FROM sparkling WHERE wine = ?",
    wine,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by wine", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new Sparkling
  Sparkling.createNewSparkling = (sparklingReqData, result) => {
    dbConn.query(
      "INSERT INTO sparkling SET ?",
      sparklingReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Sparkling created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get Sparkling by ID for update
  Sparkling.getSparklingByID = (id, result) => {
    dbConn.query("SELECT * FROM sparkling WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching Sparkling by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update Sparkling
  Sparkling.updateSparkling = (id, sparklingReqData, result) => {
    dbConn.query(
      "UPDATE sparkling SET winery=?, wine=?, location=? WHERE id = ?",
      [sparklingReqData.winery, sparklingReqData.wine,sparklingReqData.location, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating Sparkling");
          result(null, err);
        } else {
          console.log("Sparkling updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete Sparkling
  Sparkling.deleteSparkling = (id, result) => {
    dbConn.query("DELETE from sparkling WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the Sparkling");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Sparkling;
  