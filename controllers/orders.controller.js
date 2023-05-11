const orderService = require('../service/orders.service');

const createOrder = async (req, res) => {
  const order = await orderService.findByID(req.body.order_id);
  if (order != null)
    return res.status(400).send({ message: 'Order already exists' });

  orderService
    .createOrder(req.body)
    .then((ord) => {
      res.status(201).send({ message: 'Order created successfully' });
    })
    .catch((err) => {
      res.status(500).send({ err, message: 'Something went wrong' });
    });
};

const getOrderByID = async (req, res) => {
  const id = req.params.id;
  const ord = await orderService.findByID(id);
  if (ord === null) res.status(404).send({ message: 'Order not found' });
  else res.json(ord).send();
};

const updateOrder = async (req, res) => {
  const id = req.params.id;
  const ord = await orderService.updateOrder(id, req.body.delivery_date);
  if (ord === null) res.status(404).send({ message: 'Order not found' });
  else res.status(200).json({ message: 'Updated successfully' }).send();
};

const getOrdersByDate = async (req, res) => {
  const date = req.query.date;
  const orders = await orderService.getOrdersByDate(date);
  res.json(orders).send();
};

const deleteOrderByID = async (req, res) => {
  const id = req.params.id;
  const ord = await orderService.deleteOrderByID(id);
  if (ord === null) res.status(404).send({ message: 'Order not found' });
  else res.status(200).json({ message: 'Deleted successfully' }).send();
};

module.exports = {
  createOrder,
  getOrderByID,
  getOrdersByDate,
  updateOrder,
  deleteOrderByID,
};
