import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully 🔐",
    user: req.user
  });
});

export default router;