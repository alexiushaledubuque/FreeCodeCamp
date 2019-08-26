var spinalCase = ((str) => str = str.replace(/([A-Z])/g,' $1').trim().replace(/\s|_/g, '-').replace(/--/g, '-').toLowerCase());

spinalCase("This Is Spinal Tap")
spinalCase("thisIsSpinalTap") 
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe_small Things")

//FCP Basic Solution
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

//FCP Intermediate Solution
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

//FCP Advanced Solution
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}