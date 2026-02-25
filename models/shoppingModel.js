import supabase from "../config/supabaseClient.js";

export const addItem = async (data) => {
  const { data: result, error } = await supabase
    .from("shopping_list")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getItems = async (user_id) => {
  const { data, error } = await supabase
    .from("shopping_list")
    .select("*")
    .eq("user_id", user_id);

  if (error) throw error;
  return data;
};