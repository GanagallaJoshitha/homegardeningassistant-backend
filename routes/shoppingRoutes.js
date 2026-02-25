import express from "express";
import { createItem, getShoppingItems } from "../controllers/shoppingController.js";

const router = express.Router();

router.post("/", createItem);
router.get("/", getShoppingItems);

export default router;