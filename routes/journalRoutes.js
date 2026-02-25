import express from "express";
import { getUserJournal } from "../controllers/journalController.js";

const router = express.Router();
router.get("/", getUserJournal);

export default router;