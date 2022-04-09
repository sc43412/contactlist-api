const express = require('express');
const router = express.Router();
// importing the conrollers
const contactController = require('../../controllers/contactController')

const passport = require('passport');

// routes to all the crud functionality for the list model
// passport authenticate method to verify jwt token using passport jwt strategy
router.post('/create',passport.authenticate('jwt',{session:false}),contactController.create);
router.get('/listofcontacts',passport.authenticate('jwt',{session:false}),contactController.getLists);
router.delete('/:id',passport.authenticate('jwt', {session: false}),contactController.delete);
router.post('/:id/update_phoneno/?',passport.authenticate('jwt', {session: false}),contactController.update);
router.get('/op',passport.authenticate('jwt', {session: false}),contactController.mm);
console.log("last one loaded");

module.exports = router;