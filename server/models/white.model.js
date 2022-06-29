const dbConn = require('../config/db.config');

const White = function (white) {
  this.winery = white.winery;
  this.wine = white.wine;
  // this.rating = white.rating.average;
  this.location = white.location;
}

//get all White
White.getAllWhite = (result) => {
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


//get white by wine
White.getWhiteByWine = (wine, result) => {
  dbConn.query(
    "SELECT * FROM white WHERE wine = ?",
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

  // create new White
  White.createNewWhite = (whiteReqData, result) => {
    dbConn.query(
      "INSERT INTO white SET ?",
      whiteReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("White created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get white by ID for update
  White.getWhiteByID = (id, result) => {
    dbConn.query("SELECT * FROM white WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching White by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update White
  White.updateWhite = (id, whiteReqData, result) => {
    dbConn.query(
      "UPDATE white SET winery=?, wine=?, location=? WHERE id = ?",
      [whiteReqData.winery, whiteReqData.wine, whiteReqData.location, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating White");
          result(null, err);
        } else {
          console.log("White updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete White
  White.deleteWhite = (id, result) => {
    dbConn.query("DELETE from white WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the White");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = White;