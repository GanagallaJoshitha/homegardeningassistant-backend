import { supabase } from "../config/supabaseClient.js";

// Forum Posts
export const getPosts = async (req, res) => {
  try {
    const { data, error } = await supabase.from("forum_posts").select("*");
    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Forum Comments for a Post
export const getComments = async (req, res) => {
  const { post_id } = req.query;
  if (!post_id) return res.status(400).json({ error: "post_id required" });

  try {
    const { data, error } = await supabase
      .from("forum_comments")
      .select("*")
      .eq("post_id", post_id);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};