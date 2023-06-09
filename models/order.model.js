const mongoose = require('../helpers/db');

const OrderSchema = mongoose.Schema({
  order_id: { type: String, required: true, unique: true },
  item_name: { type: String, required: true },
  cost: { type: Number, required: true },
  order_date: { type: Date, required: true },
  delivery_date: { type: Date, required: true },
});

module.exports = mongoose.model('Order', OrderSchema, 'orders');
