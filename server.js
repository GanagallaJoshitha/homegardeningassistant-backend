const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");
const plantRoutes = require("./src/routes/plantRoutes");
const gardenRoutes = require("./src/routes/gardenRoutes");
const journalRoutes = require("./src/routes/journalRoutes");
const forumRoutes = require("./src/routes/forumRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/plants", plantRoutes);
app.use("/api/garden", gardenRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Home Gardening Assistant Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});