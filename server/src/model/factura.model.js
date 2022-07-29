"use strict";

const factura = (sequelize, TypeData) => {
  const facturamodel = sequelize.define(
    "factura",
    {
      id: {
        type: TypeData.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nit: {
        type: TypeData.STRING,
        field: "nit",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo nit empresa es requerido!",
          },
          len: {
            args: [4, 100],
            msg: "El campo nit tiene que tener mas de 4 digitos!",
          },
        },
      },
      razonSocial: {
        type: TypeData.STRING,
        field: "razon_social",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo razonSocial empresa es requerido!",
          },
          len: {
            args: [3, 100],
            msg: "El campo razonSocial empresa tiene que tener mas de 3 digitos!",
          },
        },
      },
      montoTotal: {
        type: TypeData.DOUBLE,
        field: "monto_total",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo montoTotal es requerido!",
          },
        },
      },
      codigoControl: {
        type: TypeData.STRING,
        field: "codigo_control",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo codigoControl es requerido!",
          },
          len: {
            args: [4, 100],
            msg: "El campo codigoControl empresa tiene que tener mas de 4 digitos!",
          },
        },
      },
      observacion: {
        type: TypeData.STRING,
        field: "observacion",
      },
    },
    {
      initialautoincrement: 1,
      underscored: true,
    }
  );
  return facturamodel;
};

module.exports = factura;
