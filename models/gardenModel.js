import supabase from "../config/supabaseClient.js";

export const addPlantToGarden = async (data) => {
  const { data: result, error } = await supabase
    .from("user_garden")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getUserGarden = async (user_id) => {
  const { data, error } = await supabase
    .from("user_garden")
    .select("*, plants(*)")
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};