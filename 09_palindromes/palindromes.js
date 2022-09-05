const palindromes = function (str) {
  let newStr = str.toLowerCase().replace(/[^\w]/g, "");
  let arr = newStr.split('');
  let temp = [...arr]
  let arrReverse = temp.reverse();
  let result = true;

  for (let i=0; i < arr.length; i++) {
    if (arr[i] != arrReverse[i]) {
      result = false;
      break;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = palindromes;
