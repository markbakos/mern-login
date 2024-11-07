const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Configure CORS to allow requests from your frontend URL
app.use(cors({
    origin: 'https://mern-login-1klb.onrender.com'
}));

// Middleware to parse JSON
app.use(express.json());

// Define your API routes
app.use('/api/auth', authRoutes);

// Simple route to check if backend is running
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connected...')
    })
    .catch(err => {
        console.error('MongoDB connection error:', err)
    });

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});