//index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
const consoleRoutes = require('./routes/consoleRoutes.js');
const tutorialRoutes = require('./routes/tutorialRoutes.js');
const teamRoutes = require('./routes/teamRoutes.js');

const { connectDB }= require('./config/db.js');


const app = express();

// Connect to MongoDB
connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

//Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000' ,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
  }));
app.use(bodyParser.json());
// Handle preflight requests for all routes
app.options('*', cors());

//Routes
app.use('/api/auth',authRoutes);
app.use('/api',userRoutes);
app.use('/api/tasks',taskRoutes);
// app.use('/api/quizzes',quizRoutes);
app.use('/api',consoleRoutes);
app.use('/api/teams',teamRoutes);
app.use('/api', tutorialRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log('Server running on port ${PORT}'));