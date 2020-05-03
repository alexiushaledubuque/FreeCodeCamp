function sumFibs(num) {
    this.num = num;
    if (num === 1 || num < 1) return num;
    let x = 0,
        y = 1,
        storage = [0,1],
        reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    while (num) {
      storage.push(storage[x] + storage[y]);
      x++;
      y++;
      num--
    }
    return storage.filter(value => value % 2)
                  .filter (value => value <= this.num)
                  .reduce(reducer);
  }
  
  sumFibs(4)

  //FCP Intermediate Solution
  function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }

  //FCP Advanced Solution
  function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num <= 0) return 0;
  
    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
  
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
      arrFib.unshift(nextFib);
    }
  
    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
  }
  
  // test here
  sumFibs(4);