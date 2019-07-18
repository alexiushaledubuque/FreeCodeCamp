function destroyer(arr) {
  let argArray = Array.prototype.slice.call(arguments);
  let shiftedArray = argArray.shift();
  return shiftedArray.filter((item) => {
    return argArray.indexOf(item) === -1;
  })
  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//FCP Basic Solution
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}


//FCP Intermediate Solution
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

//FCP Advanced Solution
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));