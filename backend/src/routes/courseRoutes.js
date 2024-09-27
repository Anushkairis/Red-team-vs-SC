const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers');

// Route to create a course
router.post('/', courseController.createCourse);

// Route to get all courses
router.get('/', courseController.getCourses);

// Route to get a course by ID
router.get('/:id', courseController.getCourseById);

// Route to update a course
router.put('/:id', courseController.updateCourse);

// Route to delete a course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
