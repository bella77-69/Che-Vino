const WhiteModel = require("../models/white.model");

// get all White list
exports.getAllWhite = (req, res) => {
  //console.log('here all users list');
  WhiteModel.getAllWhite((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get White by wine
exports.getWhiteByWine = (req, res) => {
  WhiteModel.getWhiteByWine(req.params.wine, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new White
  exports.createNewWhite = (req, res) => {
    const whiteReqData = new WhiteModel(req.body);
   // console.log("whiteReqData", whiteReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      WhiteModel.createNewWhite(whiteReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "White Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get White by ID  for Update
  exports.getWhiteByID = (req, res) => {
    //console.log('get user by id');
    WhiteModel.getWhiteByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update White
  exports.updateWhite = (req, res) => {
    const whiteReqData = new WhiteModel(req.body);
  //  console.log("whiteReqData update", whiteReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      WhiteModel.updateWhite(
        req.params.id,
        whiteReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "White updated Successfully" });
        }
      );
    }
  };
  
  // delete White
  exports.deleteWhite = (req, res) => {
    WhiteModel.deleteWhite(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "White deleted successully!" });
    });
  };