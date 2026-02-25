import express from "express";
import { getChallenges, getUserChallenges } from "../controllers/challengeController.js";

const router = express.Router();
router.get("/", getChallenges);
router.get("/user", getUserChallenges);

export default router;