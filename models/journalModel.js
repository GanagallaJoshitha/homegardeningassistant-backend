import supabase from "../config/supabaseClient.js";

export const addJournalEntry = async (data) => {
  const { data: result, error } = await supabase
    .from("plant_journal")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getJournalByGarden = async (user_garden_id) => {
  const { data, error } = await supabase
    .from("plant_journal")
    .select("*")
    .eq("user_garden_id", user_garden_id);

  if (error) throw error;
  return data;
};