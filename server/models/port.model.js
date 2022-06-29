const dbConn = require('../config/db.config');

const Port = function (port) {
  this.winery = port.winery;
  this.wine = port.wine;
  // this.rating = port.rating.average;
  this.location = port.location;
}

//get all port wine
Port.getAllPort = (result) => {
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


//get port by wine
Port.getPortByWine = (wine, result) => {
  dbConn.query(
    "SELECT * FROM port WHERE wine = ?",
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

  // create new port
  Port.createNewPort = (portReqData, result) => {
    dbConn.query(
      "INSERT INTO port SET ?",
      portReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("Port created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get port by ID for update
  Port.getPortByID = (id, result) => {
    dbConn.query("SELECT * FROM port WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching port by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update port
  Port.updatePort = (id, portReqData, result) => {
    dbConn.query(
      "UPDATE port SET winery=?, wine=?, location=? WHERE id = ?",
      [portReqData.winery, portReqData.wine, portReqData.location, id],
      (err, res) => {
        if (err) {
          console.log("Error while updating port wine");
          result(null, err);
        } else {
          console.log("Port wine updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete port
  Port.deletePort = (id, result) => {
    dbConn.query("DELETE from port WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting port wine");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = Port;
  