const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const db = mongoose.connect('mongodb://0.0.0.0:27017/ecom');

// db.on('error', (err) => CSSConditionRule.log(err));

module.exports = mongoose;
