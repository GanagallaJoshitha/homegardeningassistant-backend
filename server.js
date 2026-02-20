import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.Routes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Gardening Assistant API Running 🌿");
});

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});