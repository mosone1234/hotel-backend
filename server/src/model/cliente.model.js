"use strict";

const cliente = (sequelize, TypeData) => {
  const clienteModel = sequelize.define(
    "cliente",
    {
      id: {
        type: TypeData.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      razonSocial: {
        type: TypeData.STRING,
        field: "razon_social",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo razonSocial es requerido!",
          },
        },
      },
      nitci: {
        // Nit - Carnet de indentitdad o DNI en otros paises
        type: TypeData.STRING,
        field: "nit_ci",
        unique: {
          args: true,
          msg: "EL nit o ci/dni ya existe",
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo nit/ci/dni es requerido!",
          },
          len: {
            args: [4, 100],
            msg: "El nit o ci/dni tiene que tener mas de 4 digitos",
          },
        },
      },
      nacionalidad: {
        type: TypeData.STRING,
        field: "nacionalidad",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo nacionalidad es requerido!",
          },
          len: {
            args: [3, 100],
            msg: "El campo de nacionalidad tiene que tener mas de 3 caracteres!",
          },
        },
      },
      region: {
        type: TypeData.STRING,
        field: "region",
        allowNull: false,
        validate: {
          notNull: {
            msg: "El campo nacionalidad es requerido!",
          },
          len: {
            args: [3, 100],
            msg: "La region del cliente es necesaria",
          },
        },
      },
      observacion: {
        type: TypeData.TEXT,
        field: "observacion",
      },
    },

    {
      initialAutoIncrement: 1,
      underscored: true,
    }
  );
  return clienteModel;
};

module.exports = cliente;
