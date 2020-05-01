function dropElements(arr, func) {
    // Filter the array by condition in function
    let filteredArr = arr.filter(func),
        index = arr.indexOf(filteredArr[0]); // Find the index of the 1st filtered array element in the original array
        // Return the sliced array or empty array
    return filteredArr.length > 0 ? arr.slice(index) : filteredArr 
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });

  // FCP Basic Solution
  function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }

  // FCP Intermediate Solution
  function dropElements(arr, func) {
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
  } 

  function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }

  // FCP Advanced Solution
  function dropElements(arr, func, i = 0) {
    return i < arr.length && !func(arr[i])
      ? (dropElements(arr.slice(i + 1), func, i))
      : arr;
  }