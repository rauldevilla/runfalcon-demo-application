const loggerFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const process = winston.createLogger({
  level: "debug",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Formato de fecha y hora deseado
    loggerFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "runfalcon-demo-application.log" }),
  ],
});

module.exports = {
  process,
};
