const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
    origin: 'https://mern-login-frontend-x4uz.onrender.com'
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});