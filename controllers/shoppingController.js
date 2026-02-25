import * as shoppingModel from "../models/shoppingModel.js";
import { supabase } from "../config/supabaseClient.js";
export const createItem = async (req, res, next) => {
  try {
    const result = await shoppingModel.addItem(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const getShoppingItems = async (req, res, next) => {
  try {
    const { user_id } = req.query;
    const result = await shoppingModel.getItems(user_id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};