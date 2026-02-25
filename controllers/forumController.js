import * as forumModel from "../models/forumModel.js";
import { supabase } from "../config/supabaseClient.js";
export const createForumPost = async (req, res, next) => {
  try {
    const result = await forumModel.createPost(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getForumPosts = async (req, res, next) => {
  try {
    const result = await forumModel.getPosts();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const createComment = async (req, res, next) => {
  try {
    const result = await forumModel.addComment(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getPostComments = async (req, res, next) => {
  try {
    const { post_id } = req.query;
    const result = await forumModel.getComments(post_id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};