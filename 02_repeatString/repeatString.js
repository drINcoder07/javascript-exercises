const repeatString = function(str, num) {
  let strRepeated = str;

  if (num < 0) {
    return 'ERROR';
  } else if( (num == 0) || (num == '') ) {
    return '';
  } else {
    while(num > 1) {
      strRepeated += str;
      num--;
    }
    return strRepeated; 
  }

};

// Do not edit below this line
module.exports = repeatString;
