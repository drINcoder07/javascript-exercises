const reverseString = function(str) {
  /* ONE LINE
  return str.split('').reverse().join(''); */

  // convert str to array
  let strArray = str.split("");
  let strReversed = "";
  // get last letter out
  for (i = str.length - 1; i >= 0 ; i--) {
    strReversed += strArray.pop()
  }
  // push to new string
  return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
