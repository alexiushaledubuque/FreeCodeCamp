function chunkArrayInGroups(arr, size) {
  let numOfArrays = Math.floor(arr.length/size),
      results = [];

  for (let i = 0; i < numOfArrays; i++) {
    let tempArray = [];
    for (let e = 0; e < size; e++) {
      tempArray.push(arr.shift());
    }
    results.push(tempArray);
  }
  if (arr.length > 0) {
    results.push(arr);
  }
  return results;
}