const dbConn = require('../config/db.config');

const Rose = function (rose) {
  this.winery = rose.winery;
  this.wine = rose.wine;
  // this.rating = rose.rating.average;
  this.location = rose.location;
}

//get all rose
Rose.getAllRose = (result) => {
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


//get rose by wine
Rose.getRoseByWine= (wine, result) => {
  dbConn.query(
    "SELECT * FROM rose WHERE wine = ?",
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

  // create new rose
  Rose.createNewRose = (roseReqData, result) => {
    dbConn.query(
      "INSERT INTO rose SET ?",
      roseReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Rose created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get rose by ID for update
  Rose.getRoseByID = (id, result) => {
    dbConn.query("SELECT * FROM rose WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching rose by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update rose
  Rose.updateRose = (id, roseReqData, result) => {
    dbConn.query(
      "UPDATE rose SET winery=?, wine=?, location=? WHERE id = ?",
      [roseReqData.winery, roseReqData.wine, roseReqData.location, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating rose");
          result(null, err);
        } else {
          console.log("rose updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete rose
  Rose.deleteRose = (id, result) => {
    dbConn.query("DELETE from rose WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the rose wine");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Rose;
  