import supabase from "../config/supabase.js";

/* GET ALL PLANTS */
export const getAllPlants = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("plants")
      .select("*");

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({
      message: "Plants fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET PLANT BY ID */
export const getPlantById = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("plants")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return res.status(404).json({ error: "Plant not found" });
    }

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* SEARCH PLANTS BY NAME */
export const searchPlants = async (req, res) => {
  try {
    const { q } = req.query;

    const { data, error } = await supabase
      .from("plants")
      .select("*")
      .ilike("name", `%${q}%`);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* FILTER PLANTS */
export const filterPlants = async (req, res) => {
  try {
    const { region, sunlight } = req.query;

    let query = supabase.from("plants").select("*");

    if (region) query = query.eq("region", region);
    if (sunlight) query = query.eq("sunlight", sunlight);

    const { data, error } = await query;

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};