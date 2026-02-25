import express from "express";
import {
  getChallenges,
  joinChallenge,
  getLeaderboard
} from "../controllers/challengeController.js";

const router = express.Router();

router.get("/", getChallenges);
router.post("/join", joinChallenge);
router.get("/leaderboard", getLeaderboard);

export default router;