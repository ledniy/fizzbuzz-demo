const express = require('express');
const FizzBuzzController = require('./controllers/fizzbuzz');
const errorHandler = require('./errorHandler');
const fizzBuzzSchema = require('./schemas/fizzbuzz');
const service = require('./services/fizzbuzz');

const app = express();
const port = 3000;

app.use(express.json());

const fizzBuzzController = FizzBuzzController(service);

app.route('/fizzbuzz')
  .post(fizzBuzzSchema.post, fizzBuzzController.post);

app.use(errorHandler);

app.listen(port);
