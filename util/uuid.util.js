const uuid = () => {
  const token = "xxxxxxxx-xxxx-Rxxx-Fxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return token;
};

module.exports = uuid;
