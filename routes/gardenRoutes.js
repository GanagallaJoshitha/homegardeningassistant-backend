import express from "express";
import {
  addToGarden,
  getMyGarden,
  updateGardenPlant,
  deleteGardenPlant,
} from "../controllers/gardenController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addToGarden);
router.get("/my-garden", protect, getMyGarden);
router.put("/update/:id", protect, updateGardenPlant);
router.delete("/delete/:id", protect, deleteGardenPlant);

export default router;