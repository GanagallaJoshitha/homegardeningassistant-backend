const express = require("express");
const router = express.Router();

const {
  createJournalEntry,
  getJournalEntries,
  deleteJournalEntry,
} = require("../controllers/journalController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, createJournalEntry);
router.get("/", verifyToken, getJournalEntries);
router.delete("/:id", verifyToken, deleteJournalEntry);

module.exports = router;