import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import gardenRoutes from "./routes/gardenRoutes.js";
import plantsRoutes from "./routes/plantsRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Gardening Assistant API Running 🌿");
});

app.use("/api/auth", authRoutes);
app.use("/api/garden", gardenRoutes);
app.use("/api/plants", plantsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});