"use strict";

const reserva = (sequelize, TypeData) => {
  const reservaModel = sequelize.define(
    "reserva",
    {
      id: {
        type: TypeData.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      diasEstadia: {
        type: TypeData.INTEGER,
        field: "dias_estadia",
        //allownull: false,
        //validate: {
        //  notnull: {
        //    msg: "el campo diasEstadia es requerido!",
        //  },
        //},
      },
      estado: {
        type: TypeData.ENUM("PENDIENTE", "PAGADO", "ELIMINADO"),
        field: "estado",
      },
    },
    {
      initialautoincrement: 1,
      underscored: true,
    }
  );
  return reservaModel;
};

module.exports = reserva;
