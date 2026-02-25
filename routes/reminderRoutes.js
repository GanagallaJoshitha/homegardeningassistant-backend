import express from "express";
import { addReminder, getReminder } from "../controllers/reminderController.js";

const router = express.Router();

router.post("/", addReminder);
router.get("/", getReminder);

export default router;