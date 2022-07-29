const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nodejs Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a hotel CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:2000",
      },
    ],
  },
  apis: [path.join(process.cwd(), "/server/src/route/*.route.js")],
};

module.exports = options;
