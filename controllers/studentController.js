const Student = require('../models/Student');

// Register a new student
const registerStudent = async (req, res) => {
  try {
    const { registerNumber, studentName, phoneNumber, programme, class: studentClass, reason, selectedIDs } = req.body;

    const newStudent = new Student({
      registerNumber,
      studentName,
      phoneNumber,
      programme,
      class: studentClass,
      reason,
      selectedIDs,
    });

    await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully', student: newStudent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register student', message: error.message });
  }
};

// Get all registered students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students', message: error.message });
  }
};

module.exports = { registerStudent, getAllStudents };
