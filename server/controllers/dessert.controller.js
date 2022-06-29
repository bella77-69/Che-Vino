const DessertModel = require("../models/dessert.model");

// get all dessert list
exports.getAllDessert = (req, res) => {
  //console.log('here all dessert wine list');
  DessertModel.getAllDessert((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get dessert by wine
exports.getDessertByWine = (req, res) => {
  DessertModel.getDessertByWine(req.params.wine, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new dessert
  exports.createNewDessert = (req, res) => {
    const dessertReqData = new DessertModel(req.body);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      DessertModel.createNewDessert(dessertReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Dessert Wine Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get dessert by ID  for Update
  exports.getDessertByID = (req, res) => {
    //console.log('get user by id');
    DessertModel.getDessertByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     res.send(user);
    });
  };
  
  // update dessert
  exports.updateDessert = (req, res) => {
    const dessertReqData = new DessertModel(req.body);
  //  console.log("adminReqData update", adminReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      DessertModel.updateDessert(
        req.params.id,
        dessertReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "dessert wine updated Successfully" });
        }
      );
    }
  };
  
  // delete dessert
  exports.deleteDessert = (req, res) => {
    DessertModel.deleteDessert(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Dessert wine deleted successully!" });
    });
  };