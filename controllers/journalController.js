import * as journalModel from "../models/journalModel.js";
import { supabase } from "../config/supabaseClient.js";
export const createJournal = async (req, res, next) => {
  try {
    const result = await journalModel.addJournalEntry(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getJournal = async (req, res, next) => {
  try {
    const { user_garden_id } = req.query;
    const result = await journalModel.getJournalByGarden(user_garden_id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};