const moment = require('moment/moment');
const Order = require('../models/order.model');

const createOrder = (ord) => {
  const order = new Order(ord);
  return order.save();
};

const findByID = (id) => {
  return Order.findOne({ order_id: id });
};

const getOrderByID = (req, res) => {
  const id = req.params.id;
  Order.findOne({ order_id: id }, (err, order) => {
    if (err) return res.status(500).send(err);

    if (!order) return res.status(404).send({ message: 'Order not found' });

    res.send(order);
  });
};

const updateOrder = (id, _date) => {
  const date = moment(_date, 'YYYY/MM/DD').format('YYYY-MM-DD');
  const fields = { delivery_date: date };
  return Order.findOneAndUpdate(
    { order_id: id },
    { $set: fields },
    { new: true }
  );
};

const getOrdersByDate = (_date) => {
  const date = moment(_date, 'YYYY/MM/DD').format('YYYY-MM-DD');
  return Order.find({ order_date: date });
};

const deleteOrderByID = (id) => {
  return Order.findOneAndDelete({ order_id: id });
};

module.exports = {
  createOrder,
  findByID,
  getOrderByID,
  getOrdersByDate,
  updateOrder,
  deleteOrderByID,
};
