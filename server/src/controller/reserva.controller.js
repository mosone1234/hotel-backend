"use strict";

const db = require("../../db");
const Reserva = db.reserva;
const Cliente = db.cliente;
const Factura = db.factura;
const PersonaCuarto = db.personaCuarto;
const Cuarto = db.cuarto;
const Pago = db.pago;

const findAll = async (req, res) => {
  try {
    const response = await Reserva.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

const create = async (req, res) => {
  const data = Object.assign({}, req.body);
  try {
    const response = await Reserva.create(data);
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
    const response = await Reserva.findOne({ where: { id: data.id } });
    if (response === null) {
      throw "La reserva no existe!";
    } else {
      try {
        await Reserva.update(data, {
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
    const response = await Reserva.findOne({ where: { id: id } });
    if (response === null) {
      throw "La reserva no existe!";
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

const destroy = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Reserva.destroy({ where: { id: id } });
    console.log(response);
    if (parseInt(response) === 0) {
      throw "La reserva no existe!";
    } else {
      res.status(200).json({ message: "La reserva se elimino con exito!", id });
    }
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

const reservar = async (req, res) => {
  const data = Object.assign({}, req.body);
  const reserva = data.reservar;
  reserva.clienteId = data.clienteId;
  try {
    const resp = await Reserva.create(reserva);
    const personaCuarto = data.personaCuarto;
    personaCuarto.reservaId = resp.id;
    try {
      // personcaCuarto -------------------
      const ra = await personaCuarto.map(async (x) => {
        try {
          x.reservaId = resp.id;
          const pc = await PersonaCuarto.create(x);
          return pc.dataValues;
        } catch (error) {
          throw error;
        }
      });
      const cu = await data.cuartos.map(async (x) => {
        try {
          const cuar = await Cuarto.findOne({ where: { id: x } });
          return cuar.dataValues;
        } catch (error) {
          throw error;
        }
      });
      try {
        const a = await Promise.all(ra);
        const c = await Promise.all(cu);
        let mt = c.map((i) => i.precio).reduce((a, b) => a + b);
        try {
          // Crear la factura
          const customFacutra = {
            id: null,
            nit: "222233", // NIT Empresa
            razonSocial: "Hotel Santa Cruz", // Razon social empresa
            montoTotal: mt,
            codigoControl: "2N-3M-1D-3F",
            observacion: "",
          };
          const fact = await Factura.create(customFacutra);
          // Crear Pago
          const auxpago = {
            id: null,
            montoPagado: data.pago.montoPagado,
            metodoPago: data.pago.metodoPago,
            reservaId: resp.id,
            facturaId: fact.id,
          };
          const respon = await Pago.create(auxpago);
          const clie = await Cliente.findOne({ where: { id: data.clienteId } });
          resp.personaCuarto = a;
          let respo = {};
          respo.cliente = clie;
          respo.reserva = resp;
          respo.personaCuarto = a;
          respo.factura = fact;
          respo.pago = respon;
          res.status(200).json(respo);
        } catch (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

const mostrarReserva = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Reserva.findOne({
      where: { id: id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          all: true,
          nested: true,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    if (response === null) {
      throw "La reserva no existe!";
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "error", description: error });
  }
};

module.exports = {
  findAll,
  create,
  update,
  findById,
  destroy,
  reservar,
  mostrarReserva,
};
