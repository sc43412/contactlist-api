const express = require('express');
const router = express.Router();
// importing the conrollers
const contactController = require('../../controllers/contactController')

// routes to all the crud functionality for the list model
router.post('/create',contactController.create);
router.get('/listofcontacts',contactController.getLists);
router.get('/:id',contactController.delete);
router.post('/:id/update_phoneno/?',contactController.update);
router.get('/op',contactController.mm);
console.log("last one loaded");

module.exports = router;