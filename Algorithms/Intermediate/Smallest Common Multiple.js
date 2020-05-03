var smallestCommons = ((arr) => {
    let min = Math.min(...arr),
        max = Math.max(...arr),
        g = 0,
        l = 0,
        range = [];
  
    while (min <= max) {
      range.push(min);
      min++
    }
    
    let start = range[0],
        next = 0;
  
    for (let i = 1; i < range.length; i++) {
      next = range[i];
      g = gcd(start, next);
      l = lcm(start, next, g);
      start = l;
    }
    return start;
  })
  
  let gcd = ((a, b) => {
    while(b) {
      let temp = b;
      b = a % b
      a = temp;
    }
    return a;
  })
  
  var lcm = ((a,b,c) => (a * b)/c);

// FCP Basic Solution
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
    }
  
    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
      var GCD = gcd(lcm, range[i]);
      lcm = (lcm * range[i]) / GCD;
    }
    return lcm;
  
    function gcd(x, y) {
      // Implements the Euclidean Algorithm
      if (y === 0) return x;
      else return gcd(y, x % y);
    }
  }

// FCP Intermediate Solution
function smallestCommons(arr) {
    // Euclidean algorithm for the greatest common divisor.
    // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  
    // Least Common Multiple for two numbers based on GCD
    const lcm = (a, b) => (a * b) / gcd(a, b);
  
    // range
    let [min, max] = arr.sort((a, b) => a - b);
    let currentLCM = min;
  
    while (min < max) {
      currentLCM = lcm(currentLCM, ++min);
    }
  
    return currentLCM;
  }

// FCP Advanced Solution
  const smallestCommons = arr => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    // Initially the solution is assigned to the highest value of the array
    let sol = max;
  
    for (let i = max - 1; i >= min; i--) {
      // Each time the solution checks (i.e. sol%i===0) it won't be necessary
      // to increment 'max' to our solution and restart the loop
      if (sol % i) {
        sol += max;
        i = max;
      }
    }
    return sol;
  };