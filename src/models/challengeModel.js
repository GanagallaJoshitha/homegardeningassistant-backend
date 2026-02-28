import supabase from "../config/supabaseClient.js";

export const getChallenges = async () => {
  const { data, error } = await supabase
    .from("challenges")
    .select("*");

  if (error) throw error;
  return data;
};

export const joinChallenge = async (data) => {
  const { data: result, error } = await supabase
    .from("user_challenges")
    .insert([data])
    .select();

  if (error) throw error;
  return result;
};

export const getLeaderboard = async () => {
  const { data, error } = await supabase
    .from("user_challenges")
    .select("*")
    .order("points_earned", { ascending: false });

  if (error) throw error;
  return data;
};