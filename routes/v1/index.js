const express = require("express");
const router = express.Router();
router.use('/contacts',require('./contact'));
console.log("route loaded");
module.exports= router;