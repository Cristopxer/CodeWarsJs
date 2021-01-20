function sumPairs(ints, s) {
  seen = {}
  for (var i = 0; i < ints.length; i++){
    if(seen[ints[i]]) return [s - ints[i], ints[i]];    
    seen[s - ints[i]] = true;    
  }


}

console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
console.log(sumPairs([20, -13, 40], -7));
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
