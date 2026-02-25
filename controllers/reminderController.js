import { supabase } from "../config/supabaseClient.js";

export const getUserReminders = async (req, res) => {
  const { user_garden_id } = req.query;
  if (!user_garden_id) return res.status(400).json({ error: "user_garden_id required" });

  try {
    const { data, error } = await supabase
      .from("watering_reminders")
      .select("*")
      .eq("user_garden_id", user_garden_id);

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};