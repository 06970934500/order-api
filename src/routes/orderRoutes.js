const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.get("/", (req, res) => {
  res.send("API de pedidos funcionando");
});

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerName:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */

router.post("/", orderController.createOrder);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */

router.get("/list", orderController.listOrders);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 */

router.get("/:id", orderController.getOrder);

router.put("/:id", orderController.updateOrder);

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualizar um pedido
 *     tags     summary: Atualizar um pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido atualizado
 */

router.delete("/:id", orderController.deleteOrder);

module.exports = router;