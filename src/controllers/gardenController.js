const addPlantToGarden = async (req, res) => {
  res.json({ message: "Plant added to garden" });
};

const getUserGarden = async (req, res) => {
  res.json([{ id: 1, plant: "Tomato" }]);
};

const removePlantFromGarden = async (req, res) => {
  res.json({ message: "Plant removed" });
};

module.exports = {
  addPlantToGarden,
  getUserGarden,
  removePlantFromGarden,
};