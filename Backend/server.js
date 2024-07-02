const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

// Import Routes
const authRoutes = require('./routes/auth');
const destinationsRoutes = require('./routes/Destinations'); // Ensure the correct path and file name

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const dbURI = 'mongodb+srv://Apeksha123:*****@cluster0.9ndf7cv.mongodb.net/'; // Update with your MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationsRoutes); // Ensure the correct variable name

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../tourism-mangalore/build')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../tourism-mangalore/build', 'index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
