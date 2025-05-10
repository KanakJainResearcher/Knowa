// Load required modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Mount authentication routes
app.use('/api/auth', require('./routes/authRoutes'));

// Mount admin routes
app.use('/api/admin', require('./routes/adminRoutes'));

// Healthcheck route
app.get('/', (req, res) => {
  res.send('KNOWA backend API is running');
});

// Set server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});