const winston = require("winston");
const { combine, timestamp, printf } = winston.format;

const loggerFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const buildLogger = () => {
  var logger = winston.createLogger({
    level: "debug",
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      loggerFormat
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({
        filename: "runfalcon-demo-application.log",
      }),
    ],
  });

  return logger;
};

const logger = buildLogger();

module.exports = logger;
