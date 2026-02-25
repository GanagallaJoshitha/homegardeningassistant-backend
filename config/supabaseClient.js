import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase URL:", process.env.SUPABASE_URL);
console.log("Supabase KEY:", process.env.SUPABASE_KEY);
export default supabase;