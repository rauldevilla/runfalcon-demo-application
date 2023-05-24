const TOKEN_HEADER_NAME = "authorization";
const TOKEN_IDENTIFICATOR = "BEARER ";

const getTokenFromRequest = (req) => {
  var headerValue = req.headers[TOKEN_HEADER_NAME];

  if (!headerValue) {
    return undefined;
  }
  headerValue = headerValue.trim();
  if (headerValue.toUpperCase().startsWith(TOKEN_IDENTIFICATOR)) {
    return headerValue.substring(TOKEN_IDENTIFICATOR.length);
  }
  return headerValue;
  
};

module.exports = {
  getTokenFromRequest,
};
