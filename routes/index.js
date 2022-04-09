const express = require('express');
const router = express.Router();


// this is routing to routes that start with  /products 
router,use('/',userController.check);
router.use('/v1',require('./v1'))
console.log("v1 load");

module.exports = router;