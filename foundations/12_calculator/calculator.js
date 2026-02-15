const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((prev, current) => prev + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, current) => prev * current, 1);
};

const power = function(base, exp) {
  let result = 1;
	for(let i = 0; i < exp; ++i)
  {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for(; number > 1; --number)
  {
    result *= number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
