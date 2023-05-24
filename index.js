const express = require("express");
const logger = require("./util/logger.util");
const requestLoggerMiddleware = require("./middleware/request-loggin.middleware");

const processRoute = require('./routes/process.route');
const tokenRoute = require('./routes/token.route');

const port = 3000;

const app = express();

const addRoutes = () => {
  app.get('/', (req, res) => {
    res.send({ status: 'OK' });
  });
  app.use('/process', processRoute);
  app.use('/token', tokenRoute);
};

const addMiddlewares = () => {
  app.use(requestLoggerMiddleware);
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
