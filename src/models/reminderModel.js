import supabase from "../config/supabaseClient.js";

export const createReminder = async (data) => {
  const { data: result, error } = await supabase
    .from("watering_reminders")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getReminders = async (user_garden_id) => {
  const { data, error } = await supabase
    .from("watering_reminders")
    .select("*")
    .eq("user_garden_id", user_garden_id);

  if (error) throw error;
  return data;
};