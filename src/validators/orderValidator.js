const Joi = require("joi");

const orderSchema = Joi.object({
  customerName: Joi.string().required(),
  items: Joi.array().items(Joi.string()).required(),
  total: Joi.number().required()
});

module.exports = orderSchema;