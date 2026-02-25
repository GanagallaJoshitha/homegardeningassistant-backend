import { supabase } from "../config/supabaseClient.js";

// GET user garden
export const getUserGarden = async (req, res, next) => {
  try {
    const { user_id } = req.query; // ?user_id=uuid
    const { data, error } = await supabase
      .from("user_garden")
      .select("*, plants(*)")
      .eq("user_id", user_id);

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// ADD plant to user garden
export const addToGarden = async (req, res, next) => {
  try {
    const { user_id, plant_id, planting_date } = req.body;
    const { data, error } = await supabase.from("user_garden").insert([
      { user_id, plant_id, planting_date }
    ]);

    if (error) throw error;
    res.json(data);
  } catch (err) {
    next(err);
  }
};