function sumAll(arr) {
  let result = 0;
  if (arr[0] < arr[1]) {
    while (arr[0] <= arr[1]) {
      result += arr[0];
      arr[0]++;
    }
  } else {
    while (arr[0] >= arr[1]) {
      result += arr[0];
      arr[0]--;
    }
  }
  return result;
}

sumAll([1, 4]);

// Refactored

function sumAll(arr) {
  let result = 0,
      max = Math.max(...arr),
      min = Math.min(...arr);
      
  while (max >= min) {
      result += max;
      max--;
  }
  return result;
}

sumAll([1, 4]);

// Intermediate FCP Solution
function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}

// Advanced FCP Solution
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}