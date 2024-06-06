// All Imports
const express = require('express');
const Signup = require('../Controllers/Signup')

// Setup Router
const router = express.Router();

// All APIs
router.post('/signup', Signup)

module.exports = router;