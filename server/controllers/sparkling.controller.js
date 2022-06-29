const SparklingModel = require("../models/sparkling.model");

// get all Sparkling list
exports.getAllSparkling = (req, res) => {
  //console.log('here all users list');
  SparklingModel.getAllSparkling((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get Sparkling by wine
exports.getSparklingByWine = (req, res) => {
  SparklingModel.getSparklingByWine(req.params.wine, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new Sparkling
  exports.createNewSparkling = (req, res) => {
    const sparklingReqData = new SparklingModel(req.body);
   // console.log("sparklingReqData", sparklingReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      SparklingModel.createNewSparkling(sparklingReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Sparkling Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get Sparkling by ID  for Update
  exports.getSparklingByID = (req, res) => {
    //console.log('get user by id');
    SparklingModel.getSparklingByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update Sparkling
  exports.updateSparkling = (req, res) => {
    const sparklingReqData = new SparklingModel(req.body);
  //  console.log("sparklingReqData update", sparklingReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      SparklingModel.updateSparkling(
        req.params.id,
        sparklingReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "user updated Successfully" });
        }
      );
    }
  };
  
  // delete Sparkling
  exports.deleteSparkling = (req, res) => {
    SparklingModel.deleteSparkling(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Sparkling deleted successully!" });
    });
  };