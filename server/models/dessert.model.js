const dbConn = require('../config/db.config');

const Dessert = function (dessert) {
  this.winery = dessert.winery;
  this.wine = dessert.wine;
  // this.rating = dessert.rating.average;
  this.location = dessert.location;
}

//get all dessert wine
Dessert.getAllDessert = (result) => {
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


//get dessert by wine name
Dessert.getDessertByWine = (wine, result) => {
  dbConn.query(
    "SELECT * FROM dessert WHERE wine = ?",
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

  // create new dessert
  Dessert.createNewDessert = (dessertReqData, result) => {
    dbConn.query(
      "INSERT INTO dessert SET ?",
      dessertReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("dessert wine created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get dessert by ID for update
  Dessert.getDessertByID = (id, result) => {
    dbConn.query("SELECT * FROM dessert WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching dessert by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update dessert
  Dessert.updateDessert = (id, dessertReqData, result) => {
    dbConn.query(
      "UPDATE dessert SET winery=?, wine=?, location=? WHERE id = ?",
      [dessertReqData.winery, dessertReqData.wine, dessertReqData.location, id],
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
  
  //delete dessert
 Dessert.deleteDessert = (id, result) => {
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
  