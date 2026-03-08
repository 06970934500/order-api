const logger = require("../utils/logger");

function createOrder(orderData) {

  logger.info("Criando pedido");

  // lógica do pedido
  const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
}

//lógica do negócio
const Order = require("../models/Order");

exports.createOrder = async (data) => {

  const mappedOrder = {
    orderId: data.numeroPedido,
    value: data.valorTotal,
    creationDate: data.dataCriacao,
    items: data.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };

  const order = new Order(mappedOrder);

  return await order.save();
};

exports.getOrder = async (orderId) => {

  return await Order.findOne({ orderId });

};

exports.listOrders = async () => {

  return await Order.find();

};

exports.deleteOrder = async (orderId) => {

  return await Order.findOneAndDelete({ orderId });

};

exports.updateOrder = async (orderId, data) => {

  return await Order.findOneAndUpdate(
    { orderId },
    data,
    { new: true }
  );

};