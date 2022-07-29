"use strict";

const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  update,
  findById,
  destroy,
} = require("../controller/pago.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Pago:
 *       type: object
 *       required:
 *           diasEstadia
 *           montoPagado
 *           metodoPago
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de Pago
 *           example: null
 *         diasEstadia:
 *           type: integer
 *           description: Dias de estadia del cliente
 *           example: 4
 *         montoPagado:
 *           type: double
 *           description: Monto pagado por el cliente
 *           example: 150.00
 *         metodoPago:
 *           type: string
 *           description: EL metodo de pago del cliente
 *           example: TARJETA
 */

/**
 * @swagger
 * /api/pagos:
 *  get:
 *    tags: [Pago]
 *    summary: Obtener la lista de pagos
 *    description: Obtém la lista de pagos
 *    responses:
 *      200:
 *        description: Pagos obtidos com exito!
 *      500:
 *        description: Ocurrio un error al obetner los pagos!
 */
router.get("/api/pagos", findAll);
/**
 * @swagger
 * /api/pagos:
 *   post:
 *     tags: [Pago]
 *     summary: Crear un pago.
 *     description: Crear pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pago'
 *     responses:
 *       200:
 *         description: El pago se creo exitosamente!
 *       500:
 *         description: El pago no se pudo crear!
 */
router.post("/api/pagos", create);
/**
 * @swagger
 * /api/pagos:
 *   put:
 *     tags: [Pago]
 *     summary: Actualizar un pago.
 *     description: Actualizar pago
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pago'
 *     responses:
 *       200:
 *         description: El pago se actualizo exitosamente!
 *       500:
 *         description: El pago no se pudo Actualizar!
 */
router.put("/api/pagos", update);
/**
 * @swagger
 * /api/pagos/{id}:
 *  get:
 *    tags: [Pago]
 *    summary: Obtener un pago por ID
 *    description: Obtém pago por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del pago.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El pago fue encontrado con exito!
 */
router.get("/api/pagos/:id", findById);
/**
 * @swagger
 * /api/pagos/{id}:
 *  delete:
 *    tags: [Pago]
 *    summary: Obtener un pago por ID
 *    description: Obtém pago por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del pago.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El pago se elimino con exito!
 */
router.delete("/api/pagos/:id", destroy);

module.exports = router;
