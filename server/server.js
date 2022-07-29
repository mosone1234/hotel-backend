const express = require("express");
const morgan = require("morgan");
require("./env");
// SWAGGER
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.js");
const app = express();
// DATABASE
const db = require("./db");
const migrateDB = require("./src/data/fictures");
// SERVER PORT
app.set("port", 2000);
// MIDLEWARES
app.use(morgan("dev"));
// USE SWAGGER
const specs = swaggerJsdoc(swaggerDocument);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());
// ROUTES
app.use(require("./src/route/cliente.route"));
app.use(require("./src/route/cuarto.route"));
app.use(require("./src/route/factura.route"));
app.use(require("./src/route/reserva.route"));
app.use(require("./src/route/personaCuarto.route"));
app.use(require("./src/route/pago.route"));
// LISTEN PORT
app.listen(app.get("port"), () => {
  console.log("El SERVIDOR ESTA FUNCIONANDO");
  db.sequelize.sync({ force: true }).then(() => {
    console.log("drop and resync with { force: true }");
    migrateDB.fixturesLoader();
  });
  // db.sequelize.sync().then(() => {
  //   console.log("drop and resync with { force: true }");
  // });
});
