function titleCase(str) {
  let stringArray = str.toLowerCase().split(' ');
  return stringArray.map(x => x.replace(x[0], x[0].toUpperCase())).join(' ');
};

titleCase("I'm a little tea pot");