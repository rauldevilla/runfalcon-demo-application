const fs = require("fs");
const logger = require('./logger.util');

const readFile = () => {
    var content = 'runfalcon logo here';
  try {
    content = fs.readFileSync("./resources/logo.txt", "utf-8");
  } catch (error) {
    logger.error(error,toString());
  }
  return content;
};

const printLogo = () => {
    const logoText = readFile();
    console.log(logoText);
};

module.exports = printLogo;