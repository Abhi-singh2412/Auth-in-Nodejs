const express = require('express');
const {registerUser , loginUser} = require('../controllers/auth-controller')
const router = express.Router();


//MY ROUTES WHICH ARE ALL RELATED TO AUTH 
router.post('/register',registerUser);
router.post('/login',loginUser);





module.exports = router;
