import express from "express";
import { getPosts, getComments } from "../controllers/forumController.js";

const router = express.Router();
router.get("/", getPosts);
router.get("/comments", getComments);

export default router;