"use strict";

const personaCuarto = (sequelize, TypeData) => {
  const personaCuartoModel = sequelize.define(
    "personaCuarto",
    {
      id: {
        type: TypeData.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombres: {
        type: TypeData.STRING,
        field: "nombres",
      },
      apellidos: {
        type: TypeData.STRING,
        field: "apeliidos",
      },
      ciodni: {
        type: TypeData.STRING,
        field: "ci_dni",
      },
      pais: {
        type: TypeData.STRING,
        field: "pais",
      },
      fechaNacimiento: {
        type: TypeData.DATEONLY,
        field: "fecha_nacimiento",
      },
    },
    {
      initialautoincrement: 1,
      underscored: true,
    }
  );
  return personaCuartoModel;
};

module.exports = personaCuarto;
