const express = require('express');
const router = express.Router();

const { getRandomName } = require('../util/data.util');
const { getRandomBetween } = require('../util/random.util');
const { getTokenFromRequest } = require('../util/http.util');

const buildData = () => {
  var response = [];
  for (index = 1; index <= 100; index++) {
    response.push({
      id: index,
      name: getRandomName()
    });
  }
  return response;
};

const buildReponse = (req) => {
  const token = getTokenFromRequest(req);
  return {
    "meta-data": {
      date: new Date(),
      token: token
    },
    data: buildData()
  };
};

const getDelayTime = () => {
  const milliseconds = getRandomBetween(1, 1000);
  return milliseconds;
};

const send = (req, res) => {
  setTimeout(() => {
    res.send(buildReponse(req));
  }, getDelayTime());
};

router.get('/', (req, res) => {
    send(req, res);
});

module.exports = router;
