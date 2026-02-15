const convertToCelsius = function(fahr) {
  return Math.round(((fahr - 32) * 5/9)*10.0)/10.0;
};

const convertToFahrenheit = function(cels) {
  return Math.round((cels * 9/5 + 32)*10.0)/10.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
