function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let key in arr) {
      arr[key]['orbitalPeriod'] = Math.round((2 * Math.PI) * Math.sqrt(Math.pow((earthRadius + arr[key].avgAlt), 3) / GM));
      delete arr[key].avgAlt
    } 
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

  // FCC Basic Solution
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];
    var getOrbPeriod = function(obj) {
      var c = Math.pow(earthRadius + obj.avgAlt, 3);
      var b = Math.sqrt(c / GM);
      var orbPeriod = Math.round(a * b);
      delete obj.avgAlt;
      obj.orbitalPeriod = orbPeriod;
      return obj;
    };
  
    for (var elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
  }

  // FCC Intermediate Solution
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    //Looping through each key in arr object
    for (var prop in arr) {
      //Rounding off the orbital period value
      var orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
      );
      //deleting the avgAlt property
      delete arr[prop].avgAlt;
      //adding orbitalPeriod property
      arr[prop].orbitalPeriod = orbitalPer;
    }
  
    return arr;
  }

   // FCC Intermediate Solution Option 2
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    // Loop through each item in the array arr
    arr.forEach(function(item) {
      // Calculate the Orbital period value
      var tmp = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
      );
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
    return arr;
  }

  // FCC Advanced Solution
  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const earth = earthRadius + avgAlt;
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
      return { name, orbitalPeriod };
    });
  }