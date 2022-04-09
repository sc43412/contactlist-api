const express=require('express');
const router = express.Router();
const userController = require('../controllers/user_api');
// create session router for login and get the token
router.post('/login',userController.createSession);
// for signup 
router.post('/signup',userController.create);
module.exports = router;