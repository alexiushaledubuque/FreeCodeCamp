function checkCashRegister(price, cash, cid) {
    var change = Number(cash).toFixed(2) - Number(price).toFixed(2);
    let changeObject = {},
        previous = false,
        results = {status: '', change: []};
  
    let currency = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
    let cidTotal = cid.reduce(function(accumulator, currentValue,currentIndex, array) { 
                              return accumulator + currentValue[1];}, 0);
    results = { status: "", change: []};
    cidTotal = Math.round(cidTotal).toFixed(2);
  
    if (change > cidTotal) {
      results.status = "INSUFFICIENT_FUNDS";
      return results;
    } else {
        for (let i = currency.length-1; i >= 0; i--) {
          while(change >= currency[i][1]) {
            if (Number(cid[i][1]).toFixed(2) - Number(currency[i][1]).toFixed(2) >= 0) {
              if (!changeObject.hasOwnProperty(currency[i][0])) {
              changeObject[currency[i][0]] = currency[i][1]; 
              } else {
                changeObject[currency[i][0]] += currency[i][1];
                // changeObject[currency[i][0]] += Number(currency[i][1]).toFixed(2);
              }
            } else {
              previous = true;
            }
            if (previous) {
              previous = false;
              break;
            } else {
              change = Number(change).toFixed(2) - Number(currency[i][1]).toFixed(2);
              cid[i][1] = Number(cid[i][1]).toFixed(2) - Number(currency[i][1]).toFixed(2)
            }
          }
        }
      }
      results.change = Object.keys(changeObject).map((key) => [key, changeObject[key]]);
      
      if (cidTotal == 0) {
        results.status = "CLOSED"
        results.change = cid;
      } else if (cidTotal > 0) {
        results.status = "OPEN"
      } else {
        results.status = "INSUFFICIENT_FUNDS"
      }
      return results
  }

  //FCC Advanced Solution

  // Create an array of objects which hold the denominations and their values
var denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;
  
    // Transform CID array into drawer object
    var register = cid.reduce(
      function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      },
      { total: 0 }
    );
  
    // Handle exact change
    if (register.total === change) {
      output.status = "CLOSED";
      output.change = cid;
      return output;
    }
  
    // Handle obvious insufficient funds
    if (register.total < change) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    // Loop through the denomination array
    var change_arr = denom.reduce(function(acc, curr) {
      var value = 0;
      // While there is still money of this type in the drawer
      // And while the denomination is larger than the change remaining
      while (register[curr.name] > 0 && change >= curr.val) {
        change -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;
  
        // Round change to the nearest hundreth deals with precision errors
        change = Math.round(change * 100) / 100;
      }
      // Add this denomination to the output only if any was used.
      if (value > 0) {
        acc.push([curr.name, value]);
      }
      return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce
  
    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      return output;
    }
  
    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
  }