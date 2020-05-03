const steamrollArray = ((nestedArray, result) => {
    return nestedArray.reduce((result, num) => {
      return Array.isArray(num) ? result.concat(steamrollArray(num)) : result.concat(num);     
    }, []); 
});

steamrollArray([1, [2], [3, [[4]]]]);

// FCC Basic Solution
function steamrollArray(arr) {
    var flattenedArray = [];
  
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
  }

  function steamrollArray(arr) {
    return arr
      .toString()
      .replace(",,", ",") // "1,2,,3" => "1,2,3"
      .split(",") // ['1','2','3']
      .map(function(v) {
        if (v == "[object Object]") {
          // bring back empty objects
          return {};
        } else if (isNaN(v)) {
          // if not a number (string)
          return v;
        } else {
          return parseInt(v); // if a number in a string, convert it
        }
      });
  }

// FCC Intermediate Solution
function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }


// FCC Advanced Solution
function steamrollArray(arr, flatArr = []) {
    const elem = arr.pop();
    return elem
      ? !Array.isArray(elem)
        ? steamrollArray(arr, [elem, ...flatArr])
        : steamrollArray(arr.concat(elem), flatArr)
      : flatArr;
  }