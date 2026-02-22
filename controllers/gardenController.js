import supabase from "../config/supabase.js";

/* ADD TO GARDEN */
export const addToGarden = async (req, res) => {
  try {
    const { plant_id, planted_date, notes, growth_stage } = req.body;
    const user_id = req.user.id;

    const { data, error } = await supabase
      .from("user_garden")
      .insert([
        {
          user_id,
          plant_id,
          planted_date,
          notes,
          growth_stage,
        },
      ])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({
      message: "Plant added to garden successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET MY GARDEN */
export const getMyGarden = async (req, res) => {
  try {
    const userId = req.user.id;

    const { data, error } = await supabase
      .from("user_garden")
      .select(`
        id,
        planted_date,
        growth_stage,
        notes,
        plants (
          id,
          name,
          scientific_name,
          sunlight,
          watering_frequency,
          soil_type,
          image_url
        )
      `)
      .eq("user_id", userId);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({
      message: "My garden fetched successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE */
export const updateGardenPlant = async (req, res) => {
  try {
    const { id } = req.params;
    const { growth_stage, notes } = req.body;

    const { data, error } = await supabase
      .from("user_garden")
      .update({ growth_stage, notes })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: "Garden updated", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE */
export const deleteGardenPlant = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("user_garden")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json({ message: "Plant removed from garden" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};