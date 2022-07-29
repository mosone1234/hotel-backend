"use strict";

const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  update,
  findById,
  destroy,
} = require("../controller/factura.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Factura:
 *       type: object
 *       required:
 *         nit
 *         razonSocial
 *         montoTotal
 *         codigoControl
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de factura.
 *           example: null
 *         nit:
 *           type: string
 *           description: Nit de Empresa.
 *           example: 323222
 *         razonSocial:
 *           type: string
 *           description: Razon social de Empresa
 *           example: "Hoteles Santa Cruz"
 *         montoTotal:
 *           type: double
 *           description: "Monto total a pagar"
 *           example: 650.00
 *         codigoControl:
 *           type: string
 *           description: "Generar codigo control para la facturacion"
 *           example: "3C-4T-5Y-3U-2F"
 *         observacion:
 *           type: string
 *           description: "observacion de la factura"
 *           example: La factura esta observada por que el cliente no pago el monto total
 */

/**
 * @swagger
 * /api/facturas:
 *  get:
 *    tags: [Factura]
 *    summary: Obtener la lista de facturas
 *    description: Obtém la lista de facturas
 *    responses:
 *      200:
 *        description: Clientes obtidos com exito!
 *      500:
 *        description: Ocurrio un error al obetner los facturas!
 */
router.get("/api/facturas", findAll);
/**
 * @swagger
 * /api/facturas:
 *   post:
 *     tags: [Factura]
 *     summary: Crear un facturaarto.
 *     description: Crear facturaarto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Factura'
 *     responses:
 *       200:
 *         description: El facturaarto se creo exitosamente!
 *       500:
 *         description: El facturaarto no se pudo crear!
 */
router.post("/api/facturas", create);
/**
 * @swagger
 * /api/facturas:
 *   put:
 *     tags: [Factura]
 *     summary: Actualizar un facturaarto.
 *     description: Actualizar facturaarto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Factura'
 *     responses:
 *       200:
 *         description: El facturaarto se actualizo exitosamente!
 *       500:
 *         description: El facturaarto no se pudo Actualizar!
 */
router.put("/api/facturas", update);
/**
 * @swagger
 * /api/facturas/{id}:
 *  get:
 *    tags: [Factura]
 *    summary: Obtener un facturaarto por ID
 *    description: Obtém facturaarto por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del facturaarto.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: facturaue encontrado con exito!
 */
router.get("/api/facturas/:id", findById);
/**
 * @swagger
 * /api/facturas/{id}:
 *  delete:
 *    tags: [Factura]
 *    summary: Obtener facturaarto por ID
 *    description: Obtfacturaarto por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id dfacturaarto.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: Efacturarto se elimino con exito!
 */
router.delete("/api/facturas/:id", destroy);

module.exports = router;
