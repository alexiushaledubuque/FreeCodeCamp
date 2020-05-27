function rot13(str) {
    let cipher = '',
        cipherCode = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-zA-Z]/g)) {
        let code = str.charCodeAt(i);
        cipherCode = code + 13;
        if (cipherCode > 90) {
          cipher += String.fromCharCode((cipherCode - 90 - 1) + 65)
        } else {
          cipher += String.fromCharCode(cipherCode)
        }
      } else {
        cipher += str[i];
      }
    }
    return cipher;
}

// FCC Basic Solution
function rot13(str) {
    // Split str into a character array
    return (
      str
        .split("")
        // Iterate over each character in the array
        .map.call(str, function(char) {
          // Convert char to a character code
          var x = char.charCodeAt(0);
          // Checks if character lies between A-Z
          if (x < 65 || x > 90) {
            return String.fromCharCode(x); // Return un-converted character
          }
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places
          else if (x < 78) {
            return String.fromCharCode(x + 13);
          }
          // Otherwise shift the character 13 places backward
          return String.fromCharCode(x - 13);
        })
        .join("")
    ); // Rejoin the array into a string
  }
// FCC Intermediate Solution
// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
      if (regEx.test(str[x])) {
        // A more general approach
        // possible because of modular arithmetic
        // and cyclic nature of rot13 transform
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }

// FCC Advanced Solution
function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}
