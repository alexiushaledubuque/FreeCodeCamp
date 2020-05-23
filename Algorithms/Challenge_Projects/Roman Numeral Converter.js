function convertToRoman(num) {
    var romans = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M" 
    }
  
    let length = String(num).length,
        rString = '';
    
    if (romans.hasOwnProperty(num)) return romans[num];
  
    while (num > 0) {
      length = String(num).length
      if (length == 4) {
        rString += romans[1000];
        num = num - 1000;
      } else if (length == 3) {
        if (num >= 900) {
          rString += romans[900];
          num = num - 900;
        } else if (num >= 500) {
          rString += romans[500];
          num = num - 500;
        } else if (num >= 400) {
          rString += romans[400];
          num = num - 400;
        } else {
          rString += romans[100];
          num = num - 100;
        }
      } else if (length == 2) {
        if (num >= 90) {
          rString += romans[90];
          num = num - 90;
        } else if (num >= 50) {
          rString += romans[50];
          num = num - 50;
        } else if (num >= 40) {
          rString += romans[40];
          num = num - 40;
        } else if (num >= 10) {
          rString += romans[10];
          num = num - 10;
        }
      } else if (length == 1) {
        if (num == 9) {
          rString += romans[9];
          num = num - 9;
        } else if (num >= 5) {
          rString += romans[5];
          num = num - 5;
        } else if (num >= 4) {
          rString += romans[4];
          num = num - 4;
        } else {
          rString += romans[1];
          num = num - 1;
        }
      }
    }
    return rString;
  }
  
  convertToRoman(36);

  //FCC Intermediate Solution
  var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    var romanized = "";
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };