const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment.controller");

//get all comments
router.get("/", commentController.getAllComments);

// get comment by ID
router.get("/:id", commentController.getCommentByID);

// get name for Update
router.get("/comments/:commentid", commentController.getByCommentId);

// create new comment
router.post("/", commentController.createNewComment);

// update comment
router.put("/comments/:id", commentController.updateComment);

// delete comment
router.delete("/:id", commentController.deleteComment);

module.exports = router;