const express = require("express");
const router = express.Router();

const logger = require("../util/logger.util");
const uuid = require("../util/uuid.util");

const buildToken = () => {
  return uuid();
};

router.get("/", (req, res) => {
  res.send(buildToken());
});

module.exports = router;
