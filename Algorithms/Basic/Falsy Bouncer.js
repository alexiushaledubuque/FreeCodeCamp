function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(x => Boolean(x) == true);
}

bouncer([7, "ate", "", false, 9]);