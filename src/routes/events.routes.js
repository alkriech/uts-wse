const express = require('express');
const router = express.Router();
const controller = require('../controllers/events.controller.js');

router.get('/events', controller.getAllEvents);

router.get('/events/:id', controller.getEventById);

router.post('/events', controller.createEvent);

router.put('/events/:id', controller.updateEvent);

router.delete('/events/:id', controller.deleteEvent);

module.exports = router;