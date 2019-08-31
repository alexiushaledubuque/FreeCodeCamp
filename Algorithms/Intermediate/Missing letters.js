let fearNotLetter = function(str) { 
  let previous = str[0].charCodeAt(0),
      current = 0;

  for (let i = 1; i <= str.length - 1; i++) {
    current = str.charCodeAt(i)
    if (current !== previous + 1) {
      return String.fromCharCode(previous + 1);
    } 
    previous = current;
  }
  return undefined;
}

fearNotLetter("abce");

// FCP Basic Solution

function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}
// FCP Intermediate Solution

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// FCP Advanced Solution

function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}