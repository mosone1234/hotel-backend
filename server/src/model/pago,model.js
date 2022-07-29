"use strict";

const pago = (sequelize, TypeData) => {
  const pagoModel = sequelize.define(
    "pago",
    {
      id: {
        type: TypeData.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      //diasEstadia: {
      //  type: TypeData.INTEGER,
      //  field: "dias_estadia",
      //  allownull: false,
      //  validate: {
      //    notnull: {
      //      msg: "el campo diasEstadia es requerido!",
      //    },
      //  },
      //},
      montoPagado: {
        type: TypeData.DOUBLE,
        field: "monto_pagado",
        allowNull: false,
        validate: {
          notNull: {
            msg: "el campo montoPagado es requerido!",
          },
        },
      },
      metodoPago: {
        type: TypeData.ENUM("EFECTIVO", "TARJETA", "TRANSFERENCIA_BANCARIA"),
        field: "metodo_pago",
        allowNull: false,
        validate: {
          notNull: {
            msg: "el campo metodoPago es requerido!",
          },
          isIn: {
            args: [["EFECTIVO", "TARJETA", "TRANSFERENCIA_BANCARIA"]],
            msg: "EL campo estado es un ENUM los campos validos son EFECTIVO, TARJETA, TRANSFERENCIA_BANCARIA",
          },
        },
      },
    },
    {
      initialautoincrement: 1,
      underscored: true,
    }
  );
  return pagoModel;
};

module.exports = pago;
