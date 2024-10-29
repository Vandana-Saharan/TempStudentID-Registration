const express = require('express');
const { registerStudent, getAllStudents } = require('../controllers/studentController');
const router = express.Router();

// Route to register a new student
router.post('/register', registerStudent);

// Route to get all registered students
router.get('/students', getAllStudents);

module.exports = router;
