import express from "express";
import { addPlant, getGarden } from "../controllers/gardenController.js";

const router = express.Router();

router.post("/", addPlant);
router.get("/", getGarden);

export default router;