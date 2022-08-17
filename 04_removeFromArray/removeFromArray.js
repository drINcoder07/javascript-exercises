const removeFromArray = function(arr, ...values) {
  //iterate over value in values
  //check whether value in arr
  //remove value in arr (or store in another array maybe)
  //loop again to next value
  //return new arr

  for (value of values) {
    if (arr.indexOf(value) == -1) {
      continue;
    } else {
      arr.splice(arr.indexOf(value), 1)
    }
  }

  return arr;
  
};

// Do not edit below this line
module.exports = removeFromArray;
