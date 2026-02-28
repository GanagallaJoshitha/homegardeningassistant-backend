const supabase = require("../config/supabaseClient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, password: hashedPassword }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "User registered", user: data });
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, data.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: data.id, email: data.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ message: "Login successful", token });
};

// Get current user
const getCurrentUser = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email")
    .eq("id", req.user.id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};