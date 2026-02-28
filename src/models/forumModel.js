import supabase from "../config/supabaseClient.js";

export const createPost = async (data) => {
  const { data: result, error } = await supabase
    .from("forum_posts")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getPosts = async () => {
  const { data, error } = await supabase
    .from("forum_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

export const addComment = async (data) => {
  const { data: result, error } = await supabase
    .from("forum_comments")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getComments = async (post_id) => {
  const { data, error } = await supabase
    .from("forum_comments")
    .select("*")
    .eq("post_id", post_id);

  if (error) throw error;
  return data;
};