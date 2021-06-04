const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');

const Email = require('../models/email');

// Create an event
router.post('/sendme/email/', (req, res) => {
    const email = new Email({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });
    email.save().then(result => {
      res.status(201).send({
        message: 'Email sent successfully.',
        createdPost: {
          name: req.body.name,
          email: req.body.email,
          message: req.body.message
        }
      });
    })
});

module.exports = router;
