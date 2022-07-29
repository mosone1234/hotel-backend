"use strict";

const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  update,
  findById,
  destroy,
  reservar,
  mostrarReserva,
} = require("../controller/reserva.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       required:
 *         estado
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: null
 *         estado:
 *           type: string
 *           description: Estados de pago PENDIENTE, PAGADO, ELIMINADO.
 *           example: PENDIENTE
 */

/**
 * @swagger
 * /api/reservas:
 *  get:
 *    tags: [Reserva]
 *    summary: Obtener la lista de reservas
 *    description: Obtém la lista de reservas
 *    responses:
 *      200:
 *        description: Reservas obtidos com exito!
 *      500:
 *        description: Ocurrio un error al obetner los reservas!
 */
router.get("/api/reservas", findAll);
/**
 * @swagger
 * /api/reservas:
 *   post:
 *     tags: [Reserva]
 *     summary: Crear un reserva.
 *     description: Crear reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: El reserva se creo exitosamente!
 *       500:
 *         description: El reserva no se pudo crear!
 */
router.post("/api/reservas", create);
/**
 * @swagger
 * /api/reservas:
 *   put:
 *     tags: [Reserva]
 *     summary: Actualizar un reserva.
 *     description: Actualizar reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: El reserva se actualizo exitosamente!
 *       500:
 *         description: El reserva no se pudo Actualizar!
 */
router.put("/api/reservas", update);
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    tags: [Reserva]
 *    summary: Obtener un reserva por ID
 *    description: Obtém reserva por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del reserva.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El reserva fue encontrado con exito!
 */
router.get("/api/reservas/:id", findById);
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *    tags: [Reserva]
 *    summary: Obtener un reserva por ID
 *    description: Obtém reserva por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del reserva.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El reserva se elimino con exito!
 */
router.delete("/api/reservas/:id", destroy);

/**
 * @swagger
 * components:
 *   schemas:
 *     ProcesoReserva:
 *       type: object
 *       required:
 *         estado
 *       properties:
 *         clienteId:
 *           type: integer
 *           description: Id de cliente para registro.
 *           example: 1
 *         reservar:
 *           type: object
 *           description: datos para la reserva.
 *           example: { diasEstadia: 4, estado: PENDIENTE }
 *         cuartos:
 *           type: array
 *           description: numeros de cuartos para reservar.
 *           example: [3]
 *         pago:
 *           type: object
 *           description: hacer un pago para la reserva.
 *           example: {
 *              montoPagado: 100.00,
 *              metodoPago: TARJETA,
 *           }
 *         personaCuarto:
 *           type: array
 *           description: asignar a las personas a los cuartos
 *           example: [
 *            {id: null, nombres: Carmen, apellidos: Sanches, ciodni: 23222, pais: Bolivia, fechaNacimiento: 1999-02-02, cuartoId: 3 },
 *            {id: null, nombres: Alfredo, apellidos: Costas Sanches, ciodni: 332322, pais: Bolivia, fechaNacimiento: 2007-03-03, cuartoId: 3 }
 *           ]
 *
 */

/**
 * @swagger
 * /api/proceso-reservar:
 *   post:
 *     tags: [Proceso para Reservar]
 *     summary: Crear un reserva.
 *     description: Crear reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProcesoReserva'
 *     responses:
 *       200:
 *         description: El reserva se creo exitosamente!
 *       500:
 *         description: El reserva no se pudo crear!
 */
router.post("/api/proceso-reservar", reservar);
/**
 * @swagger
 * /api/mostrar-reserva/{id}:
 *  get:
 *    tags: [Proceso para Reservar]
 *    summary: Obtener un reserva por ID
 *    description: Obtém reserva por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del reserva.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El reserva se elimino con exito!
 */
router.get("/api/mostrar-reserva/:id", mostrarReserva);

module.exports = router;
