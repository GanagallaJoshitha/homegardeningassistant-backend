const getAllPlants = async (req, res) => {
  res.json([{ id: 1, name: "Tomato" }, { id: 2, name: "Rose" }]);
};

const getPlantById = async (req, res) => {
  res.json({ id: req.params.id, name: "Sample Plant" });
};

const searchPlants = async (req, res) => {
  const { query } = req.query;
  res.json({ search: query });
};

module.exports = {
  getAllPlants,
  getPlantById,
  searchPlants,
};