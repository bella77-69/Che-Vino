const PortModel = require("../models/port.model");

// get all port list
exports.getAllPort = (req, res) => {
  PortModel.getAllPort((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get port by wine
exports.getPortByWine = (req, res) => {
  PortModel.getPortByWine(req.params.wine, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
  
  // create new port wine
  exports.createNewPort = (req, res) => {
    const portReqData = new PortModel(req.body);
   // console.log("adminReqData", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      PortModel.createNewPort(portReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Port Wine Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get port by ID  for Update
  exports.getPortByID = (req, res) => {
    //console.log('get user by id');
    PortModel.getPortByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update port
  exports.updatePort = (req, res) => {
    const portReqData = new PortModel(req.body);
  //  console.log("adminReqData update", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      PortModel.updatePort(
        req.params.id,
        portReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "port wine updated Successfully" });
        }
      );
    }
  };
  
  // delete port
  exports.deletePort = (req, res) => {
    PortModel.deletePort(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Port Wine deleted successully!" });
    });
  };