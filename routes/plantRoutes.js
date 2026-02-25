import express from "express";
import { getAllPlants, getPlantById } from "../controllers/plantController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/:id", getPlantById);

export default router;