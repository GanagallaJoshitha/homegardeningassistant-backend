import { supabase } from "../config/supabaseClient.js";

export const getUserShopping = async (req, res) => {
  const { user_id } = req.query;
  if (!user_id) return res.status(400).json({ error: "user_id required" });

  try {
    const { data, error } = await supabase
      .from("shopping_list")
      .select("*")
      .eq("user_id", user_id);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};