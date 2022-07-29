"use strict";

const sequelize_fictures = require("sequelize-fixtures");
const db = require("../../db");

const models = {
  Cliente: db.cliente,
  Cuarto: db.cuarto,
  Reserva: db.reserva,
  Factura: db.factura,
  Pago: db.pago,
  PersonaCuarto: db.personaCuarto,
};

const fixtures = [
  {
    // CUARTO
    model: "Cuarto",
    data: {
      id: 1,
      codigoCuarto: "CC1",
      tipoHabitacion: "DOBLES",
      numeroCuarto: 1,
      numeroCamas: 2,
      maximoPersonas: 2,
      estado: "OCUPADO",
      precio: 200.0,
      descripcion: "",
    },
  },
  {
    model: "Cuarto",
    data: {
      id: 2,
      codigoCuarto: "CC2",
      tipoHabitacion: "INDIVIDUAL",
      numeroCuarto: 2,
      numeroCamas: 1,
      maximoPersonas: 1,
      estado: "DISPONIBLE",
      precio: 100.0,
      descripcion: "",
    },
  },
  {
    model: "Cuarto",
    data: {
      id: 3,
      codigoCuarto: "CC3",
      tipoHabitacion: "FAMILIAR",
      numeroCuarto: 3,
      numeroCamas: 3,
      maximoPersonas: 4,
      estado: "DISPONIBLE",
      precio: 300.0,
      descripcion: "",
    },
  },
  {
    // CLIENTE
    model: "Cliente",
    data: {
      id: 1,
      razonSocial: "Marcelo Zeballos",
      nitci: "323232",
      nacionalidad: "Mexico",
      region: "Estado de Mexico",
      observacion: "ninguna",
    },
  },
  {
    model: "Cliente",
    data: {
      id: 2,
      razonSocial: "Constructora Maldonado SRL",
      nitci: "734322",
      nacionalidad: "Bolivia",
      region: "La Paz",
      observacion: "ninguna",
    },
  },
  {
    model: "Cliente",
    data: {
      id: 3,
      razonSocial: "Maria Gonzales",
      nitci: "434343",
      nacionalidad: "Chile",
      region: "Santiago de Chile",
      observacion: "ninguna",
    },
  },
  {
    // RESERVA
    model: "Reserva",
    data: {
      id: 1,
      diasEstadia: 1,
      estado: "PENDIENTE",
      clienteId: 1,
    },
  },
  {
    // PERSONA CUARTO
    model: "PersonaCuarto",
    data: {
      id: 1,
      nombres: "Miguel Angel",
      apellidos: "Sanches Gutierrez",
      ciodni: "3434343",
      pais: "Bolivia",
      fechaNacimiento: "1995-04-01",
      reservaId: 1,
      cuartoId: 1,
    },
  },
  {
    model: "PersonaCuarto",
    data: {
      id: 2,
      nombres: "Jose Miguel",
      apellidos: "Espinosa Gonzales",
      ciodni: "23232",
      pais: "Bolivia",
      fechaNacimiento: "1996-03-03",
      reservaId: 1,
      cuartoId: 1,
    },
  },
  {
    model: "Factura",
    data: {
      id: 1,
      nit: 2333223,
      razonSocial: "Hoteles Santa Cruz",
      montoTotal: 200.0,
      codigoControl: "2G-3C-9J-5T",
      observacion: "",
    },
  },
  {
    // PAGO
    model: "Pago",
    data: {
      id: 1,
      montoPagado: 100.0,
      metodoPago: "TARJETA",
      reservaId: 1,
      facturaId: 1,
    },
    model: "Pago",
    data: {
      id: 2,
      montoPagado: 100.0,
      metodoPago: "EFECTIVO",
      reservaId: 1,
      facturaId: 1,
    },
  },
];

const fixturesLoader = () => {
  sequelize_fictures.loadFixtures(fixtures, models).then(function () {
    console.log(
      "Los datos han sido cargados, revise las tablas de su base de datos!"
    );
  });
};

module.exports = {
  fixturesLoader,
};
