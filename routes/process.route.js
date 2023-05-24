const express = require('express');
const router = express.Router();

const { logger } = require('../util/logger.util');
const { getRandomName } = require('../util/data.util');

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

router.get('/', (req, res) => {
    logger.debug('Process');
    res.send(buildReponse());
});

module.exports = router;
