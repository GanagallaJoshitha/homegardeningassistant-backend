import supabase from "../config/supabaseClient.js";

export const getAllPlants = async () => {
  const { data, error } = await supabase
    .from("plants")
    .select("*");

  if (error) throw error;
  return data;
};