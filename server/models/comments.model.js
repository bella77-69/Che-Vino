const dbConn = require('../config/db.config');

const AllComments = function (comment) {
    // this.id = comment.id;
    this.comments = comment.comments;
    this.name = comment.name
    this.date = comment.date;
}

//get all Comments
AllComments.getAllComments = (result) => {
  dbConn.query("SELECT * FROM review_comments", (err, res) => {
    if (err) {
      console.log("Error while fetching All Comments", err);
      result(null, err);
    } else {
    //  console.log("Admin fetched successfully");
      result(null, res);
    }
  });
};


//get comments by comment id
AllComments.getByCommentId = (commentid, result) => {
  dbConn.query(
    "SELECT * FROM review_comments WHERE commentid = ?",
    commentid,
    (err, res) => {
      if (err) {
       console.log("Error while fetching data by commentid", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

  // create new comment
  AllComments.createNewComment = (CommentsReqData, result) => {
    dbConn.query(
      "INSERT INTO review_comments SET ?",
      CommentsReqData,
      (err, res) => {
        if (err) {
          console.log("Error while inserting data");
          result(null, err);
        } else {
          console.log("comment created successfully");
          result(null, res);
        }
      }
    );
  };
  
  //get comment by ID for update
  AllComments.getCommentByID = (id, result) => {
    dbConn.query("SELECT * FROM review_comments WHERE id=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching comment by id", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  //update comment
  AllComments.updateComment = (commentid, CommentsReqData, result) => {
    dbConn.query(
      "UPDATE review_comments SET comments=?, name=?, date=?  WHERE commentid = ?",
      [CommentsReqData.comments, CommentsReqData.name, CommentsReqData.date, commentid],
      (err, res) => {
        if (err) {
          console.log("Error while updating Comments");
          result(null, err);
        } else {
          console.log("Comments updated successfully");
          result(null, res);
        }
      }
    );
  };
  
  //delete comment
  AllComments.deleteComment = (id, result) => {
    dbConn.query("DELETE from review_comments WHERE id=?", [id], (err, res) => {
      if (err) {
        console.log("Error while deleting the comment");
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };
  
  module.exports = AllComments;
  