const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//const User=require('../models/user');
const router = express.Router();

// Register User
router.post('/', async (req, res) => {
  try {
    console.log("Received request body:", req.body); // Debugging

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use." });
    }

    const user = new User({ email, password });
    await user.save();
    
    console.log("User registered successfully:", user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(400).json({ error: err.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
