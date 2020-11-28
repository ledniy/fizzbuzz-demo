const express = require('express');
const helpers = require('./helpers');
const errorHandler = require('./errorHandler');

const FizzBuzzController = require('./controllers/fizzbuzz');
const fizzBuzzSchema = require('./schemas/fizzbuzz');
const service = require('./services/fizzbuzz');

const app = express();

app.use(express.json());

const fizzBuzzController = FizzBuzzController(service);

app.route('/fizzbuzz')
  .post(fizzBuzzSchema.post, fizzBuzzController.post)
  .all(helpers.notImplemented);

app.use(helpers.notFound);

app.use(errorHandler);

module.exports = app;
