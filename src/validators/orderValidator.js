const Joi = require("joi");

const orderSchema = Joi.object({
  customerName: Joi.string().required(),
  numeroPedido: Joi.number().required(),
  valorTotal: Joi.number().required(),
  dataCriacao: Joi.date().required(),

  items: Joi.array().items(
    Joi.object({
      idItem: Joi.number().required(),
      quantidadeItem: Joi.number().required(),
      valorItem: Joi.number().required()
    })
  ).required()
});

module.exports = orderSchema;