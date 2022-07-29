"use strict";

const cuarto = (sequelize, TypeData) => {
  const cuartoModel = sequelize.define(
    "cuarto",
    {
      id: {
        type: TypeData.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigoCuarto: {
        type: TypeData.STRING,
        field: "codigo_cuarto",
        unique: {
          args: true,
          msg: "EL codigo de cuarto ya existe",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "el campo codigocuarto es requerido!",
          },
          len: {
            args: [2, 100],
            msg: "el campo codigocuarto tiene que tener mas de 2 digitos",
          },
        },
      },
      tipoHabitacion: {
        type: TypeData.ENUM(
          "FAMILIAR",
          "MATRIMONIAL",
          "COMPARTIDA",
          "SUIT_PRINCIPAL",
          "INDIVIDUAL",
          "DOBLES",
          "CUADRUPLES"
        ),
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo tipoHabitacion es requerido!",
          },
          isIn: {
            args: [
              [
                "FAMILIAR",
                "MATRIMONIAL",
                "COMPARTIDA",
                "SUIT_PRINCIPAL",
                "INDIVIDUAL",
                "DOBLES",
                "CUADRUPLES",
              ],
            ],
            msg: "EL campo tipoHabitacion es un ENUM los campos validos son FAMILIAR, MATRIMONIAL, COMPARTIDA, SUIT_PRINCIPAL, INDIVIDUAL, DOBLES, CUADRUPLES",
          },
        },
      },
      numeroCuarto: {
        type: TypeData.STRING,
        field: "number_cuarto",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo numeroCuarto es requerido!",
          },
        },
      },
      numeroCamas: {
        type: TypeData.INTEGER,
        field: "numero_camas",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo numeroCamas es requerido!",
          },
        },
      },
      maximoPersonas: {
        type: TypeData.INTEGER,
        field: "maximo_personas",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo maximoPersonas es requerido!",
          },
        },
      },
      estado: {
        type: TypeData.ENUM("OCUPADO", "DISPONIBLE", "MANTENIMIENTO"),
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo estado es requerido!",
          },
          isIn: {
            args: [["OCUPADO", "DISPONIBLE", "MANTENIMIENTO"]],
            msg: "EL campo estado es un ENUM los campos validos son OCUPADO, DISPONIBLE, MANTENIMIENTO",
          },
        },
      },
      precio: {
        type: TypeData.DOUBLE,
        field: "precio",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo precio es requerido!",
          },
        },
      },
      descripcion: {
        type: TypeData.TEXT,
        field: "observacion",
      },
    },
    {
      initialAutoIncrement: 1,
      underscored: true,
    }
  );
  return cuartoModel;
};

module.exports = cuarto;
