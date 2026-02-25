import * as challengeModel from "../models/challengeModel.js";
import { supabase } from "../config/supabaseClient.js";
export const getChallenges = async (req, res, next) => {
  try {
    const data = await challengeModel.getChallenges();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const joinChallenge = async (req, res, next) => {
  try {
    const data = await challengeModel.joinChallenge(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const getLeaderboard = async (req, res, next) => {
  try {
    const data = await challengeModel.getLeaderboard();
    res.json(data);
  } catch (err) {
    next(err);
  }
};