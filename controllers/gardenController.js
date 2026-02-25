import * as gardenModel from "../models/gardenModel.js";
import { supabase } from "../config/supabaseClient.js";
export const addPlant = async (req, res, next) => {
  try {
    const result = await gardenModel.addPlantToGarden(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getGarden = async (req, res, next) => {
  try {
    const { user_id } = req.query;
    const result = await gardenModel.getUserGarden(user_id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};