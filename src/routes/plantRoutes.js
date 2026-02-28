const express = require("express");
const router = express.Router();

const {
  getAllPlants,
  getPlantById,
  searchPlants,
} = require("../controllers/plantController");

router.get("/", getAllPlants);
router.get("/search", searchPlants);
router.get("/:id", getPlantById);

module.exports = router;