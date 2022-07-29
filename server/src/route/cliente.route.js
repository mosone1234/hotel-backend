"use strict";

const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  update,
  findById,
  destroy,
} = require("../controller/cliente.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         razonSocial
 *         nitci
 *         nacionalidad
 *         region
 *       properties:
 *         id:
 *           type: integer
 *           description: ID cliente.
 *           example: null
 *         razonSocial:
 *           type: string
 *           description: Razon Social de Cliente o Empresa.
 *           example: Nestor Maldonado o Empresa Contrucion SRL
 *         nitci:
 *           type: string
 *           description: Nit o CI/DNI del cliente.
 *           example: 233223
 *         nacionalidad:
 *           type: string
 *           description: "nacionalidad del cliente"
 *           example: Bolivia, Argentina, chile, etc...
 *         region:
 *           type: string
 *           description: "region de donde proviene el cliente"
 *           example: Laz Paz, Oruro, Cochabamba etc...
 *         observacion:
 *           type: string
 *           description: "Observacion sobre la conducta del cliente"
 *           example: Alguna obeservacion sobre el cliente
 */

/**
 * @swagger
 * /api/clientes:
 *  get:
 *    tags: [Cliente]
 *    summary: Obtener la lista de clientes
 *    description: Obtém la lista de clientes
 *    responses:
 *      200:
 *        description: Clientes obtidos com exito!
 *      500:
 *        description: Ocurrio un error al obetner los clientes!
 */
router.get("/api/clientes", findAll);
/**
 * @swagger
 * /api/clientes:
 *   post:
 *     tags: [Cliente]
 *     summary: Crear un cliente.
 *     description: Crear cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: El cliente se creo exitosamente!
 *       500:
 *         description: El cliente no se pudo crear!
 */
router.post("/api/clientes", create);
/**
 * @swagger
 * /api/clientes:
 *   put:
 *     tags: [Cliente]
 *     summary: Actualizar un cliente.
 *     description: Actualizar cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: El cliente se actualizo exitosamente!
 *       500:
 *         description: El cliente no se pudo Actualizar!
 */
router.put("/api/clientes", update);
/**
 * @swagger
 * /api/clientes/{id}:
 *  get:
 *    tags: [Cliente]
 *    summary: Obtener un cliente por ID
 *    description: Obtém cliente por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del cliente.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El cliente fue encontrado con exito!
 */
router.get("/api/clientes/:id", findById);
/**
 * @swagger
 * /api/clientes/{id}:
 *  delete:
 *    tags: [Cliente]
 *    summary: Obtener un cliente por ID
 *    description: Obtém cliente por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del cliente.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El cliente se elimino con exito!
 */
router.delete("/api/clientes/:id", destroy);

module.exports = router;
