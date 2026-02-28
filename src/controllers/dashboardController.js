const getDashboardStats = async (req, res) => {
  res.json({
    totalPlants: 5,
    totalJournalEntries: 3,
    totalPosts: 2,
  });
};

module.exports = { getDashboardStats };