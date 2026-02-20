import { supabase } from "../config/supabase.js";

export const createUser = async (userData) => {
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error && error.code !== "PGRST116") throw error;

  return data;
};