const CommentsModel = require("../models/comments.model");

// get all comments list
exports.getAllComments = (req, res) => {
  //console.log('here all users list');
  CommentsModel.getAllComments((err, user) => {
    // console.log("We are here");
    if (err) res.send(err);
    //console.log("user", user);
    res.send(user);
  });
};

// get comment by name
exports.getByCommentId= (req, res) => {
  CommentsModel.getByCommentId(req.params.commentid, (err, user) => {
    if (err) res.send(err);
   // console.log("single email user data", user);
    res.send(user);
  });
};
  
  // create new comment
  exports.createNewComment = (req, res) => {
    const CommentsReqData = new CommentsModel(req.body);
   // console.log("AllWinesReqData", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      CommentsModel.createNewComment(CommentsReqData, (err, user) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Comment Created Successfully",
          data: user.insertId,
        });
      });
    }
  };
  
  // get comment  by ID  for Update
  exports.getCommentByID = (req, res) => {
    //console.log('get user by id');
    CommentsModel.getCommentByID(req.params.id, (err, user) => {
      if (err) res.send(err);
     // console.log("single user data", user);
     res.send(user);
    });
  };
  
  // update comment
  exports.updateComment = (req, res) => {
    const CommentsReqData = new CommentsModel(req.body);
  //  console.log("AllWinesReqData update", AllWinesReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: "Please fill all fields" });
    } else {
      CommentsModel.updateComment(
        req.params.commentid,
        CommentsReqData,
        (err, user) => {
          if (err) res.send(err);
          res.json({ status: true, message: "comment updated Successfully" });
        }
      );
    }
  };
  
  // delete comment
  exports.deleteComment = (req, res) => {
    CommentsModel.deleteComment(req.params.id, (err, user) => {
      if (err) res.send(err);
      res.json({ success: true, message: "Comment deleted successully!" });
    });
  };