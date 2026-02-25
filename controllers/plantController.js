import { supabase } from "../config/supabaseClient.js";

// GET all plants
export const getAllPlants = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from("plants")
      .select("*")
      .order("name", { ascending: true });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};

// GET single plant by ID
export const getPlantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("plants")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    res.json(data);
  } catch (err) {
    next(err);
  }
};