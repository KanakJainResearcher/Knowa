const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skills: [String],
    isAdmin: { type: Boolean, default: false } // ✅ ADDED
  }, { timestamps: true });

module.exports = mongoose.model('User', userSchema);