const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPosts,
  addComment,
} = require("../controllers/forumController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, createPost);
router.get("/", getAllPosts);
router.post("/:postId/comment", verifyToken, addComment);

module.exports = router;