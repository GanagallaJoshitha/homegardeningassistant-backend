import express from "express";
import { getUserGarden, addToGarden } from "../controllers/gardenController.js";

const router = express.Router();

router.get("/", getUserGarden);
router.post("/", addToGarden);

export default router;