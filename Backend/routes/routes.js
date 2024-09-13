// backend/routes/routes.js
const express = require('express');
const { register, login, protect } = require('../controllers/authController');
const { addBook, updateBook } = require('../controllers/bookController');
const router = express.Router();

// Authentication Routes
router.post('/auth/register', register);
router.post('/auth/login', login);

// Book Routes (protected routes for admin)
router.post('/books', protect, addBook);
router.put('/books/:id', protect, updateBook);

module.exports = router;
