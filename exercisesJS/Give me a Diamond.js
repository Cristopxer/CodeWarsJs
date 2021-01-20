// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples
// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"
// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
//   if (n % 2 <= 0) return null;
//   diam = [];
//   let x = 1;
//   let z = (n - 1)/2;
//   back = false;
//   for (let i = 0; i < n; i++) {    
//     diam.push(" ".repeat(z) + "*".repeat(x) + "\n");
//     if (x === n) back = true;
//     if (back) {
//       z += 1;
//       x -= 2;
//     } else {
//       z -= 1;
//       x += 2;
//     }
//   }
//   return diam.join('');
  
  if (n % 2 <= 0) return null;
  var x = (n - 1)/2
  var z = 1;
  str = '';
  for (let i = 0; i< n; i++){
    str = str+' '.repeat(Math.abs(x))+'*'.repeat(z)+'\n';    
    x -= 1    
    z = n - Math.abs(x*2)
  }
  return str;
}

console.log(diamond(3));
//   console.log(diamond(-3))
//   console.log(diamond(0))
