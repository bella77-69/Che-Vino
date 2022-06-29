const RedModel = require("../models/red.model");

// get all red list
exports.getAllRed = (req, res) => {
  RedModel.getAllRed((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    res.send(user);
  });
};

// get red by wine
exports.getRedByWine = (req, res) => {
  RedModel.getRedByWine(req.params.wine, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
  
  // create new red
  exports.createNewRed = (req, res) => {
    const redReqData = new RedModel(req.body);
   // console.log("adminReqData", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      RedModel.createNewRed(redReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Red Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get red by ID  for Update
  exports.getRedByID = (req, res) => {
    RedModel.getRedByID(req.params.id, (err, user) => {
      if (err) res.send(err);
   
     res.send(user);
    });
  };
  
  // update red
  exports.updateRed = (req, res) => {
    const redReqData = new RedModel(req.body);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      RedModel.updateRed(
        req.params.id,
        redReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "red updated Successfully" });
        }
      );
    }
  };
  
  // delete red
  exports.deleteRed = (req, res) => {
    RedModel.deleteRed(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Red deleted successully!" });
    });
  };