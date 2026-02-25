import express from "express";
import { createJournal, getJournal } from "../controllers/journalController.js";

const router = express.Router();

router.post("/", createJournal);
router.get("/", getJournal);

export default router;