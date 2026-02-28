const express = require("express");
const router = express.Router();

const {
  addPlantToGarden,
  getUserGarden,
  removePlantFromGarden,
} = require("../controllers/gardenController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, addPlantToGarden);
router.get("/", verifyToken, getUserGarden);
router.delete("/:id", verifyToken, removePlantFromGarden);

module.exports = router;