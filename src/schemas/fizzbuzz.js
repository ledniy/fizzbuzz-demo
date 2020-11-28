const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  post: celebrate({
    [Segments.BODY]: Joi.object({
      count: Joi.number().required()
    }).required()
  })
}
