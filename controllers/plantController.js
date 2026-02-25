import * as plantModel from "../models/plantModel.js";
import { supabase } from "../config/supabaseClient.js";
export const getPlants = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("plants")
      .select("*");

    if (error) throw error;

    res.status(200).json(data);   // ✅ MUST be .json()
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};