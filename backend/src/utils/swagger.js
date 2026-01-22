const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Files API",
      version: "1.0.0",
      description: "API for managing and retrieving files",
    },
    servers: [
      {
        url: "http://localhost:9000",
      },
    ],
  },
  apis: [path.join(__dirname, "../routers/*.js")],
};

const specs = swaggerJsdoc(options);
module.exports = { swaggerUi, specs };
