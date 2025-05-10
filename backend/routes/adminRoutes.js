const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUserById } = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware');
const adminOnly = require('../middleware/adminMiddleware');

// GET all users (admin only)
router.get('/users', protect, adminOnly, getAllUsers);

// DELETE user by ID (admin only)
router.delete('/user/:id', protect, adminOnly, deleteUserById);

module.exports = router;
