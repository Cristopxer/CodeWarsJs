// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

const n = 5
let z = n-1
let x = 1
tower = [];
for (let i = 0; i< n; i++){    
    tower.push(' '.repeat(z)+'*'.repeat(x)+' '.repeat(z));
    x += 2;
    z -= 1;
}
console.log(tower);
