import express from "express";
import { getUserShopping } from "../controllers/shoppingController.js";

const router = express.Router();
router.get("/", getUserShopping);

export default router;