// // tutorialController.js

// const express = require('express');
// const router = express.Router();
// const Video = require('../models/Video');

// // POST route to save video data
// router.post('/videos', async (req, res) => {
//   try {
//     const { topic, score, link, image } = req.body;

//     const newVideo = new Video({
//       topic,
//       score,
//       link,
//       image
//     });

//     await newVideo.save();
//     res.status(201).json({ message: 'Video saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to save video' });
//   }
// });

// module.exports = router;
