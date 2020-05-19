function palindrome(str) {
    //cleanup the string
    str = str.match(/[a-zA-Z]|\d/g).join('');
    let length = str.length;
    return str.slice(0, Math.floor(length/2)).toLowerCase() == str.slice(-(Math.floor(length/2))).split('').reverse().join('').toLowerCase();
  }
  
  palindrome("eye");


// FCC Basic Solution
function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}

// FCC Intermediate Solution
function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (var i = 0, len = str.length - 1; i < len / 2; i++) {
        if (str[i] !== str[len - i]) {
        return false;
        }
    }
    return true;
}

//FCC Advanced Solution
//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why.
function palindrome(str) {
    //assign a front and a back pointer
    let front = 0;
    let back = str.length - 1;
  
    //back and front pointers won't always meet in the middle, so use (back > front)
    while (back > front) {
      //increments front pointer if current character doesn't meet criteria
      if (str[front].match(/[\W_]/)) {
        front++;
        continue;
      }
      //decrements back pointer if current character doesn't meet criteria
      if (str[back].match(/[\W_]/)) {
        back--;
        continue;
      }
      //finally does the comparison on the current character
      if (str[front].toLowerCase() !== str[back].toLowerCase()) return false;
      front++;
      back--;
    }
  
    //if the whole string has been compared without returning false, it's a palindrome!
    return true;
} 