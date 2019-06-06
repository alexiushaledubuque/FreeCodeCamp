function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (typeof(bool) === 'undefined' || bool === null || bool === 0 || typeof(bool) === 'function' || typeof(bool) !== 'boolean') {
    return false;
  } else {
    return true;
  }
}

booWho(false);

// easier solution below - test if it's a boolean.
// return typeof(bool) === 'boolean'