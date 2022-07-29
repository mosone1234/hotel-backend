const valueSequelize = require("sequelize");

const sequelize = new valueSequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("La base de datos se conecto con exito!");
  })
  .catch((error) => {
    console.log(error);
  });

const db = {};

db.sequelize = sequelize;
db.valueSequelize = valueSequelize;
// TABLES
db.cliente = require("./src/model/cliente.model")(sequelize, valueSequelize);
db.cuarto = require("./src/model/cuarto.model")(sequelize, valueSequelize);
db.factura = require("./src/model/factura.model")(sequelize, valueSequelize);
db.reserva = require("./src/model/reserva.model")(sequelize, valueSequelize);
db.personaCuarto = require("./src/model/personaCuarto.model")(
  sequelize,
  valueSequelize
);
db.pago = require("./src/model/pago,model")(sequelize, valueSequelize);
// RELATIONSHIP
db.cliente.hasMany(db.reserva, { onDelete: "CASCADE" });
db.reserva.belongsTo(db.cliente, { onDelete: "CASCADE" });

db.cuarto.hasMany(db.personaCuarto, { onDelete: "CASCADE" });
db.personaCuarto.belongsTo(db.cuarto, { onDelete: "CASCADE" });

db.reserva.hasMany(db.personaCuarto, { onDelete: "CASCADE" });
db.personaCuarto.belongsTo(db.reserva, { onDelete: "CASCADE" });

db.reserva.hasMany(db.pago, { onDelete: "CASCADE" });
db.pago.belongsTo(db.reserva, { onDelete: "CASCADE" });

db.factura.hasMany(db.pago, { onDelete: "CASCADE" });
db.pago.belongsTo(db.factura, { onDelete: "CASCADE" });

module.exports = db;
