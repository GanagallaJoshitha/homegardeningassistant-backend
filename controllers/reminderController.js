import * as reminderModel from "../models/reminderModel.js";
import { supabase } from "../config/supabaseClient.js";
export const addReminder = async (req, res, next) => {
  try {
    const result = await reminderModel.createReminder(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getReminder = async (req, res, next) => {
  try {
    const { user_garden_id } = req.query;
    const result = await reminderModel.getReminders(user_garden_id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};