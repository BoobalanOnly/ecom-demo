const router = require('express').Router();
const orderRoutes = require('./orders.route');

router.use('/orders', orderRoutes);

module.exports = router;
