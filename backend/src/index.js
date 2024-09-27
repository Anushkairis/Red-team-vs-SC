//index.js

const express = require('express');
const session = require('express-session');
// For MongoDB session store
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/profileRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
const consoleRoutes = require('./routes/consoleRoutes.js');
const tutorialRoutes = require('./routes/tutorialRoutes.js');
const teamRoutes = require('./routes/teamRoutes.js');
const courseRoutes = require('./routes/courseRoutes.js');


const app = express();

// MongoDB connection
const mongoUrl = 'mongodb://localhost:27017/database';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: 'your-secret-key', // Replace with your secret
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl }), // Use the same MongoDB connection string
    cookie: { secure: false } // Set to `true` if using HTTPS
}));

app.use(cors({
    origin: 'http://localhost:3000' ,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));

// Handle preflight requests for all routes

//Routes
app.use('/api/auth',authRoutes);
app.use('/api/auth',userRoutes);
app.use('/api/tasks',taskRoutes);
// app.use('/api/quizzes',quizRoutes);
app.use('/api',consoleRoutes);
app.use('/api/teams',teamRoutes);
app.use('/api', tutorialRoutes);
app.use('/api/courses', courseRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log('Server running on port ${PORT}'));