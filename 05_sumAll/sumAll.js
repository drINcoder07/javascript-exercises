const sumAll = function(num1, num2) {
  let sumOfNumbers;
  let largerNum, smallerNum;

  if (typeof(num1) == 'string' || typeof(num2) == 'string' || num1 < 0 || num2 < 0 ) {
    return ' ERROR';
  } else {

    if (num1 > num2) {
      largerNum = num1;
      smallerNum = num2;
    } else {
      largerNum = num2;
      smallerNum = num1;
    }

    for ( let i = smallerNum; i <= largerNum; i++)  {
      sumOfNumbers += i
    }

    return sumOfNumbers;
  }

};

// Do not edit below this line
module.exports = sumAll;
