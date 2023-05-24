const express = require("express");
const router = express.Router();

const logger = require("../util/logger.util");

const buildToken = () => {
  const token = "xxxxxxxx-xxxx-Rxxx-Fxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return token;
};

router.get("/", (req, res) => {
  res.send(buildToken());
});

module.exports = router;
