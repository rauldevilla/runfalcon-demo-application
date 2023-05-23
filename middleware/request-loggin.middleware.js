const { logger } = require('../util/logger.util');

const requestLogger = (req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url}`);
    next();
};

module.exports = {
    requestLogger
};
