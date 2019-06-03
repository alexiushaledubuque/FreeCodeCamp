function repeatStringNumTimes(str, num) {
  // repeat after me
  let results = '';
  if (num < 0) return '';
  
  for (let i = 1; i <= num; i++) {
    results += str;
  }
  return results;
}

repeatStringNumTimes("abc", 3);