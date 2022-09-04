const add = function(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result+= arguments[i];
  }
  return result;
};

const subtract = function(...args) {
	let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result-= arguments[i];
  }
  return result;
};

const sum = function(arr) {
	let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result+= arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result*= arr[i];
  }
  return result;
};

const power = function(base, exp) {
  let result = 1;
	for (let i=0; i < exp; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  let nums = num;
  if (nums == 0) {
    return result;
  } else {
    for (let i = 0; i < num; i++) {
      result*= nums;
      nums--;
    }
    return result;
  }
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
