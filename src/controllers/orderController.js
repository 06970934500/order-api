const orderSchema = require("../validators/orderValidator");
const orderService = require("../services/orderService");

exports.createOrder = async (req, res, next) => {
  try {

    const { error } = orderSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: error.message
      });
    }

    const order = await orderService.createOrder(req.body);

    res.status(201).json(order);

  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {

    const order = await orderService.getOrder(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    res.json(order);

  } catch (error) {
    next(error);
  }
};

exports.listOrders = async (req, res, next) => {
  try {

    const orders = await orderService.listOrders();

    res.json(orders);

  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {

    const order = await orderService.updateOrder(
      req.params.id,
      req.body
    );

    res.json(order);

  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {

    await orderService.deleteOrder(req.params.id);

    res.json({ message: "Pedido deletado" });

  } catch (error) {
    next(error);
  }
};