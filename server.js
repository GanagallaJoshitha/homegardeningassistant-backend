import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import plantRoutes from "./routes/plantRoutes.js";
import gardenRoutes from "./routes/gardenRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import reminderRoutes from "./routes/reminderRoutes.js";
import forumRoutes from "./routes/forumRoutes.js";
import challengeRoutes from "./routes/challengeRoutes.js";
import shoppingRoutes from "./routes/shoppingRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🌱 HomeGardeningAssistant API Running Successfully");
});

// API routes
app.use("/api/plants", plantRoutes);
app.use("/api/garden", gardenRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/shopping", shoppingRoutes);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));