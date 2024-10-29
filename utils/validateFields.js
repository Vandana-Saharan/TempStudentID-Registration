const validateFields = (req, res, next) => {
    const { registerNumber, studentName, phoneNumber, programme, class: studentClass, reason } = req.body;
  
    if (!registerNumber || !studentName || !phoneNumber || !programme || !studentClass || !reason) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    next(); // Proceed to the next middleware or route handler
  };
  
  module.exports = validateFields;
  