const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentId: {
      type: String,
      required: [true, 'Student ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
    },
    favoriteSubjects: { type: [String], default: [] }
  });
  

module.exports = mongoose.model('Student', StudentSchema);
