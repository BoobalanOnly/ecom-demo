require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const errorHandler = require('./middleware/error-handler');

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/', routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
