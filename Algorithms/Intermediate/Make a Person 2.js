var Person = function(firstAndLast) {
    const array = firstAndLast.split(' ');
    this.getFullName = function() {
      return array.join(' ');
    };
    this.getFirstName = function() {
      return array[0];
    };
    this.getLastName = function() {
      return array[1];
    };
    this.setFirstName = function(first) {
      array[0] = first;
    };
    this.setLastName = function(last) {
      array[1] = last;
    };
    this.setFullName = function(firstAndLast) {
      const arr = firstAndLast.split(' ');
      this.setFirstName(arr[0]);
      this.setLastName(arr[1]);
    };
};