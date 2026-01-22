const http = require("http");
const cors = require("cors");
const express = require("express");
const { swaggerUi, specs } = require("../utils/index.js");

class Config {
  constructor() {
    this.app = express();
    this.port = 9000;
    this.server = http.createServer(this.app);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    this.app.use("/files", require("../routers/files"));
  }

  execute() {
    this.server.listen(this.port, () => {
      console.log(`🚀🚀 💥Server is running💥 🚀🚀 ${this.port}`);
    });
  }
}

module.exports = Config;
