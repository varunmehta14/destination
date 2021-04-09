const express = require('express');

const DestinationCtrl = require('../controllers/destination-control');

const router = express.Router();

router.post('/destination', DestinationCtrl.createDestination);
router.put('/destination/:id', DestinationCtrl.updateDestination);
router.delete('/destination/:id', DestinationCtrl.deleteDestination);
router.get('/destination/:id',DestinationCtrl.getDestinationByName);
router.get('/destinations', DestinationCtrl.getDestinations);

module.exports = router