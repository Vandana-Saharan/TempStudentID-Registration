const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/mongodb');
const studentRoutes = require('./routes/studentRoutes');
const validateFields = require('./utils/validateFields');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Apply validation only to the POST route
app.use('/api/register', validateFields, studentRoutes);

// Mount student routes without validation for GET
app.use('/api', studentRoutes);

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
