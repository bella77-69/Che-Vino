const WhiteModel = require("../models/white.model");

// get all users list
exports.getAllUsers = (req, res) => {
  //console.log('here all users list');
  WhiteModel.getAllUsers((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get user by email
exports.getUserByEmail = (req, res) => {
  WhiteModel.getUserByEmail(req.params.email, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new user
  exports.createNewUser = (req, res) => {
    const adminReqData = new WhiteModel(req.body);
   // console.log("adminReqData", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      WhiteModel.createNewUser(adminReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "User Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get user by ID  for Update
  exports.getUserByID = (req, res) => {
    //console.log('get user by id');
    WhiteModel.getUserByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update user
  exports.updateUser = (req, res) => {
    const adminReqData = new WhiteModel(req.body);
  //  console.log("adminReqData update", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      WhiteModel.updateUser(
        req.params.id,
        adminReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "user updated Successfully" });
        }
      );
    }
  };
  
  // delete user
  exports.deleteUser = (req, res) => {
    WhiteModel.deleteUser(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "User deleted successully!" });
    });
  };