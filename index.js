const express = require("express");
const { logger } = require("./util/logger.util");
const { requestLogger } = require("./middleware/request-loggin.middleware");

const processRoute = require('./routes/process.route');

const port = 3000;

const app = express();

const addRoutes = () => {
  app.get('/', (req, res) => {
    res.send({ status: 'OK' });
  });
  app.use('/process', processRoute);
};

const addMiddlewares = () => {
  app.use(requestLogger);
};

const startApp = () => {
  app.listen(port, () => {
    logger.info(`Starting server at port ${port}`);
  });
};

const start = () => {
  addMiddlewares();
  addRoutes();
  startApp();
};

start();
