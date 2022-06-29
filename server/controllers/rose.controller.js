const RoseModel = require("../models/rose.model");

// get all rose list
exports.getAllRose = (req, res) => {
  RoseModel.getAllRose((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get rose by wine
exports.getRoseByWine = (req, res) => {
  RoseModel.getRoseByWine(req.params.wine, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
  
  // create new rose
  exports.createNewRose = (req, res) => {
    const roseReqData = new RoseModel(req.body);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      RoseModel.createNewRose(roseReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "rose Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get roseby ID  for Update
  exports.getRoseByID = (req, res) => {
    RoseModel.getRoseByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     res.send(user);
    });
  };
  
  // update rose
  exports.updateRose = (req, res) => {
    const roseReqData = new RoseModel(req.body);
  //  console.log("adminReqData update", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      RoseModel.updateRose(
        req.params.id,
        roseReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "rose updated Successfully" });
        }
      );
    }
  };
  
  // delete rose
  exports.deleteRose = (req, res) => {
    RoseModel.deleteRose(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "rose deleted successully!" });
    });
  };