const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// POST route to save or update video data
router.post('/videos', async (req, res) => {
    try {
        const { link, completed, progress } = req.body;
    
        let video = await Video.findOne({ link });
        if (video) {
          // Update existing video
          video.completed = completed;
          video.progress = progress; // Update progress
        } else {
          // Create new video
          video = new Video({ link, completed, progress });
        }
    
        await video.save();
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ message: 'Error saving video', error });
    }
});

// GET route to fetch all video data
router.get('/videos', async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching videos', error });
    }
});

module.exports = router;
