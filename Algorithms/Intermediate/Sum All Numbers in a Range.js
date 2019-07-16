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