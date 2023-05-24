
const getRandomBetween = (min, max) => {
    localMin = Math.ceil(min);
    localMax = Math.floor(max);
    return Math.floor(Math.random() * (localMax - localMin + 1)) + localMin;
};

module.exports = {
    getRandomBetween
};

