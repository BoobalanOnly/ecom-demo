const orderController = require('../controllers/orders.controller');
const router = require('express').Router();

router.post('/create', orderController.createOrder);
router.get('/list', orderController.getOrdersByDate);
router.post('/update/:id', orderController.updateOrder);
router.get('/search/:id', orderController.getOrderByID);
router.post('/delete/:id', orderController.deleteOrderByID);

module.exports = router;
