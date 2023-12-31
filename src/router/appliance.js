const express = require('express');
const router = express.Router();

router.use('/refrigerator', require('./appliances/refrigerator'));
router.use('/air-conditioner', require('./appliances/airConditioner'));
router.use('/boiler', require('./appliances/boiler'));
router.use('/dryer', require('./appliances/dryer'));
router.use('/microwave', require('./appliances/microwave'));
router.use('/television', require('./appliances/television'));
router.use('/washing-machine', require('./appliances/washingMachine'));

module.exports = router;