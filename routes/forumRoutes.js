import express from "express";
import {
  createForumPost,
  getForumPosts,
  createComment,
  getPostComments
} from "../controllers/forumController.js";

const router = express.Router();

router.post("/", createForumPost);
router.get("/", getForumPosts);

router.post("/comment", createComment);
router.get("/comments", getPostComments);

export default router;