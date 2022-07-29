"use strict";

const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  update,
  findById,
  destroy,
} = require("../controller/cuarto.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     Cuarto:
 *       type: object
 *       required:
 *         codigoCuarto
 *         tipoHabitacion
 *         numeroCuarto
 *         numeroCamas
 *         maximoPersonas
 *         estado
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de cuarto.
 *           example: null
 *         codigoCuarto:
 *           type: integer
 *           description: Codigo de cuarto.
 *           example: CC1
 *         tipoHabitacion:
 *           type: integer
 *           description: Tipo de la habitacion.
 *           example: FAMILIAR
 *         numeroCuarto:
 *           type: integer
 *           description: Numero de cuarto
 *           example: 1
 *         numeroCamas:
 *           type: integer
 *           description: Numero de camas del cuarto
 *           example: 3
 *         maximoPersonas:
 *           type: integer
 *           description: Maximo personas por cuarto
 *           example: 3
 *         estado:
 *           type: string
 *           description: Estado del cuarto "OCUPADO, DISPONIBLE, MANTENIMIENTO"
 *           example: "OCUPADO"
 *         descripcion:
 *           type: string
 *           description: "Descripcion del cuarto"
 *           example: Cuarto con tres camas television bano independiente esta en el primer piso
 */

/**
 * @swagger
 * /api/cuartos:
 *  get:
 *    tags: [Cuarto]
 *    summary: Obtener la lista de cuartos
 *    description: Obtém la lista de cuartos
 *    responses:
 *      200:
 *        description: Clientes obtidos com exito!
 *      500:
 *        description: Ocurrio un error al obetner los cuartos!
 */
router.get("/api/cuartos", findAll);
/**
 * @swagger
 * /api/cuartos:
 *   post:
 *     tags: [Cuarto]
 *     summary: Crear un cuarto.
 *     description: Crear cuarto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cuarto'
 *     responses:
 *       200:
 *         description: El cuarto se creo exitosamente!
 *       500:
 *         description: El cuarto no se pudo crear!
 */
router.post("/api/cuartos", create);
/**
 * @swagger
 * /api/cuartos:
 *   put:
 *     tags: [Cuarto]
 *     summary: Actualizar un cuarto.
 *     description: Actualizar cuarto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cuarto'
 *     responses:
 *       200:
 *         description: El cuarto se actualizo exitosamente!
 *       500:
 *         description: El cuarto no se pudo Actualizar!
 */
router.put("/api/cuartos", update);
/**
 * @swagger
 * /api/cuartos/{id}:
 *  get:
 *    tags: [Cuarto]
 *    summary: Obtener un cuarto por ID
 *    description: Obtém cuarto por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del cuarto.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El cuarto fue encontrado con exito!
 */
router.get("/api/cuartos/:id", findById);
/**
 * @swagger
 * /api/cuartos/{id}:
 *  delete:
 *    tags: [Cuarto]
 *    summary: Obtener un cuarto por ID
 *    description: Obtém cuarto por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del cuarto.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El cuarto se elimino con exito!
 */
router.delete("/api/cuartos/:id", destroy);

module.exports = router;
