function findLongestWordLength(str) {
  let longest = 0;
  str = str.split(' ');

  for (let i = 0; i <+ str.length; i++) {
    if (str[i].length > longest) {
      longest = str[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");