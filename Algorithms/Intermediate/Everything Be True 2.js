const truthCheck = (collection, pre) => {
    return collection.every(item => item.hasOwnProperty(pre) && !!item[pre]);
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  // FCC Basic Solution
  function truthCheck(collection, pre) {
    // Create a counter to check how many are true.
    var counter = 0;
    // Check for each object
    for (var c in collection) {
      // If it is has property and value is truthy
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    // Outside the loop, check to see if we got true for all of them and return true or false
    return counter == collection.length;
  }

  // FCC Intermediate Solution
  function truthCheck(collection, pre) {
    return collection.every(function(element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }

  // FCC Advanced Solution
  function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
  }