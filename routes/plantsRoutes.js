import express from "express";
import {
  getAllPlants,
  getPlantById,
  searchPlants,
  filterPlants,
} from "../controllers/plantsController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/search", searchPlants);
router.get("/filter", filterPlants);
router.get("/:id", getPlantById);

export default router;