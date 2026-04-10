const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./backend/config/database');
const authRoutes = require('./backend/routes/authRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('codelegacy'));

// Routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/codelegacy/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/codelegacy/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/codelegacy/register.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
