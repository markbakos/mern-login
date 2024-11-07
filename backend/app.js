const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
    origin: 'https://mern-login-1klb.onrender.com'
}));

app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

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