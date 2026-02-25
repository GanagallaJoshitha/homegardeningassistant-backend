import express from "express";
import { getUserReminders } from "../controllers/reminderController.js";

const router = express.Router();
router.get("/", getUserReminders);

export default router;