const express = require('express');
const router = express.Router();
const stuffControllers = require('../controllers/stuffControllers')

router.post('/', stuffControllers.createStuff);
  

//update route

router.put('/:id', stuffControllers.updateStuff)

router.get('/:id', stuffControllers.getStuff); //get one stuff
    //delete route
router.delete('/:id', stuffControllers.deleteStuff);
  
// get all
router.get('/', stuffControllers.getStuffs);

module.exports = router;