const express = require('express');
const Student = require('../models/student');
const auth = require('../middlewares/auth'); // Import authentication middleware
const router = express.Router();

// Get all students (Protected)
router.get('/', auth, async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Add student (Protected)
router.post('/', auth, async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
});


router.post('/login', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;
