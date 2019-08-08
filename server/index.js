const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')(); //for better server logging
const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});