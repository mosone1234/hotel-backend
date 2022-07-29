"use strict";

const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  update,
  findById,
  destroy,
} = require("../controller/personaCuarto.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     PersonaCuarto:
 *       type: object
 *       required:
 *         nombres
 *         apellidos
 *         fechaNacimiento
 *       properties:
 *         id:
 *           type: integer
 *           description: ID personaCuarto.
 *           example: null
 *         nombres:
 *           type: string
 *           description: Nombre de la persona que va a estar en el cuarto
 *           example: Jose Ariel
 *         apellidos:
 *           type: string
 *           description: The client's nitci o dni.
 *           example: Maldonado Sanchez
 *         fechaNacimiento:
 *           type: date
 *           description: 1998-02-01
 *           example:
 */

/**
 * @swagger
 * /api/persona-cuarto:
 *  get:
 *    tags: [PersonaCuarto]
 *    summary: Obtener la lista de persona-cuarto
 *    description: Obtém la lista de persona-cuarto
 *    responses:
 *      200:
 *        description: Persona-Cuarto obtidos com exito!
 *      500:
 *        description: Ocurrio un error al obetner los persona-cuarto!
 */
router.get("/api/persona-cuarto", findAll);
/**
 * @swagger
 * /api/persona-cuarto:
 *   post:
 *     tags: [PersonaCuarto]
 *     summary: Crear un persona-cuarto.
 *     description: Crear persona-cuarto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonaCuarto'
 *     responses:
 *       200:
 *         description: El persona-cuarto se creo exitosamente!
 *       500:
 *         description: El persona-cuarto no se pudo crear!
 */
router.post("/api/persona-cuarto", create);
/**
 * @swagger
 * /api/persona-cuarto:
 *   put:
 *     tags: [PersonaCuarto]
 *     summary: Actualizar un persona-cuarto.
 *     description: Actualizar persona-cuarto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonaCuarto'
 *     responses:
 *       200:
 *         description: El persona-cuarto se actualizo exitosamente!
 *       500:
 *         description: El persona-cuarto no se pudo Actualizar!
 */
router.put("/api/persona-cuarto", update);
/**
 * @swagger
 * /api/persona-cuarto/{id}:
 *  get:
 *    tags: [PersonaCuarto]
 *    summary: Obtener un persona-cuarto por ID
 *    description: Obtém persona-cuarto por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del persona-cuarto.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El persona-cuarto fue encontrado con exito!
 */
router.get("/api/persona-cuarto/:id", findById);
/**
 * @swagger
 * /api/persona-cuarto/{id}:
 *  delete:
 *    tags: [PersonaCuarto]
 *    summary: Obtener un persona-cuarto por ID
 *    description: Obtém persona-cuarto por ID
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Id del persona-cuarto.
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *         description: El persona-cuarto se elimino con exito!
 */
router.delete("/api/persona-cuarto/:id", destroy);

module.exports = router;
