const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

const allowedOrigins = ['https://mern-login-1klb.onrender.com/login', 'https://mern-login-1klb.onrender.com/register']
app.use(cors({
    origin: function (origin, callback) {
        if(allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else{
            callback(new Error('Not allowed by CORS'))
        }
    },
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req,res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected...')
})
.catch(err => {
    console.error('MongoDB connection error:',err)
});