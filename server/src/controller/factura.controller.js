"use strict";

const db = require("../../db");
const Factura = db.factura;

const findAll = async (req, res) => {
  try {
    const response = await Factura.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

const create = async (req, res) => {
  const data = Object.assign({}, req.body);
  try {
    const response = await Factura.create(data);
    console.log("esto es lo que devuelve ");
    console.log(response.dataValues);
    console.log("esto es lo que devuelve ");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

const update = async (req, res) => {
  const data = Object.assign({}, req.body);
  try {
    const response = await Factura.findOne({ where: { id: data.id } });
    if (response === null) {
      throw "El cliente no existe!";
    } else {
      try {
        await Factura.update(data, {
          where: { id: data.id },
        });
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({ message: "error", description: error });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "error", description: error });
  }
};

const findById = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Factura.findOne({ where: { id: id } });
    if (response === null) {
      throw "El cliente no existe!";
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(300).json({ message: "error", description: error });
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Factura.destroy({ where: { id: id } });
    console.log(response);
    if (parseInt(response) === 0) {
      throw "El cliente no existe!";
    } else {
      res.status(200).json({ message: "El cliente se elimino con exito!", id });
    }
  } catch (error) {
    res.status(300).json({ message: "error", description: error });
  }
};

module.exports = {
  findAll,
  create,
  update,
  findById,
  destroy,
};
