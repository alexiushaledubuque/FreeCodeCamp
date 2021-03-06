function sumPrimes(num) {
    let storage = [],
        reducer = (accumulator, currentValue) => accumulator + currentValue;
    while (num) {
      storage.push(num);
      num--;
    }
    return storage.filter(value => isPrime(value))
                  .reduce(reducer);
  }
  function isPrime (n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  
  sumPrimes(10);