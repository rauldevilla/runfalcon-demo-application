const express = require('express');
const router = express.Router();

const logger = require('../util/logger.util');
const { getRandomName } = require('../util/data.util');
const { getRandomBetween } = require('../util/random.util');

const buildReponse = () => {
  var response = [];
  for (index = 1; index <= 100; index++) {
    response.push({
      id: index,
      name: getRandomName()
    });
  }
  return response;
};

const getDelaySeconds = () => {
  const milliseconds = getRandomBetween(1, 1000);
  logger.debug(`Milliseconds: ${milliseconds}`);
  return milliseconds;
};

const send = (res) => {
  setTimeout(() => {
    res.send(buildReponse());
  }, getDelaySeconds());
};

router.get('/', (req, res) => {
    logger.debug('Process');
    send(res);
});

module.exports = router;
