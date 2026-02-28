const createJournalEntry = async (req, res) => {
  res.json({ message: "Journal entry created" });
};

const getJournalEntries = async (req, res) => {
  res.json([{ id: 1, note: "Watered plants today" }]);
};

const deleteJournalEntry = async (req, res) => {
  res.json({ message: "Journal entry deleted" });
};

module.exports = {
  createJournalEntry,
  getJournalEntries,
  deleteJournalEntry,
};