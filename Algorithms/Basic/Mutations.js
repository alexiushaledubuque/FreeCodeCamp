function mutation(arr) {
  let array0 = arr[0].toLowerCase().split('');
  for (let i = 0; i <= arr[1].length-1; i++) {
    if (array0.indexOf(arr[1][i].toLowerCase()) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);