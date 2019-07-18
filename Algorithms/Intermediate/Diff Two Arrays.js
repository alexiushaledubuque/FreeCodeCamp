function diffArray(arr1, arr2) {
  let result = [];
  var sortArr1 = arr1.sort()
  var sortArr2 = arr2.sort()
  result.push(sortArr1.filter((item) =>
    sortArr2.indexOf(item) < 0));
  result.push(sortArr2.filter((item) =>
    sortArr1.indexOf(item) < 0));
  return result.length > 1 ? result[0].concat(result[1]) : result[0];
}

// FCP Basic Solution
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
 }

// FCP Intermediate Solution
function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }

// FCP Advanced Solution
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);