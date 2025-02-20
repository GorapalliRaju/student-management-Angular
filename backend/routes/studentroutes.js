const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Get all students
router.get('/', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// Add a new student
router.post('/', async (req, res) => {
    const { studentId, name, phone, email, department, favoriteSubjects } = req.body;
    const student = new Student({ studentId, name, phone, email, department, favoriteSubjects });
    await student.save();
    res.status(201).json(student);
});

// Update student details
router.put('/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});

// Delete a student
router.delete('/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
});

// Search students by name
router.get('/search/:name', async (req, res) => {
    const students = await Student.find({ name: new RegExp(req.params.name, 'i') });
    res.json(students);
});

module.exports = router;
