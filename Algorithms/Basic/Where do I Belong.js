function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b){return a - b});
  for (let i = 0; i <= arr.length; i++){
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);