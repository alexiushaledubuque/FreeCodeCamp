function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copy2 = arr2.slice(0, arr2.length);
  for (let i = 0; i <= arr1.length-1; i++) {
    copy2.splice(n, 0, arr1[i]);
    n++;
  }
  return copy2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);