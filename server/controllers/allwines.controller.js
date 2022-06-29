const AllWinesModel = require("../models/allWines.model");

// get all wines
exports.getAllWines = (req, res) => {
  AllWinesModel.getAllWines((err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};

// get wine by winery
exports.getWineByWinery = (req, res) => {
  AllWinesModel.getWineByWinery(req.params.winery, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new wine
  // exports.createNewWine = (req, res) => {
  //   const allWinesReqData = new AllWinesModel(req.body);
  //  // console.log("AllWinesReqData", AllWinesReqData);
  //   // check null
  //   if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
  //     res.send(400).send({ success: false, message: "Please fill all fields" });
  //   } else {
  //     AllWinesModel.createNewWine(allWinesReqData, (err, user) => {
  //       if (err) res.send(err);
  //       res.json({
  //         status: true,
  //         message: "Wine Created Successfully",
  //         data: user.insertId,
  //       });
  //     });
  //   }
  // };
  exports.createNewWine = (req, res) => {
    const allWinesReqData = new AllWinesModel(req.body);
   // console.log("AllWinesReqData", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      AllWinesModel.createNewWine(allWinesReqData, (err, user) => {
        if (err) res.send(err);
        res.json(user)
        // res.json({
        //   status: true,
        //   message: "Wine Created Successfully",
        //   data: user.insertId,
        // });
      });
    }
  };
  // get wine by ID  for Update
  exports.getWineByID = (req, res) => {
    //console.log('get user by id');
    AllWinesModel.getWineByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update wine
  exports.updateWine = (req, res) => {
    const allWinesReqData = new AllWinesModel(req.body);
  //  console.log("AllWinesReqData update", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      AllWinesModel.updateWine(
        req.params.id,
        allWinesReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "wine updated Successfully" });
        }
      );
    }
  };
  
  // delete wine
  exports.deleteWine = (req, res) => {
    AllWinesModel.deleteWine(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Wine deleted successully!" });
    });
  };