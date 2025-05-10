const express = require('express');
const router = express.Router();
const { register, login, updateProfile, deleteAccount } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, (req, res) => res.json(req.user));
router.put('/me', protect, updateProfile);
router.delete('/me', protect, deleteAccount);

module.exports = router;