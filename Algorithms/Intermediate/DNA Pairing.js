function pairElement(str) {
  let pairings = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      pairings.push(["A", "T"])
    } else if (str[i] === "T") {
      pairings.push(["T", "A"])
    } else if (str[i] === "C") {
      pairings.push(["C", "G"])
    } else {
      pairings.push(["G", "C"])
    }
  }

  return pairings;
}

// FCP Basic Solution

 function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }

// FCP Intermediate Solution

 function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    }
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }