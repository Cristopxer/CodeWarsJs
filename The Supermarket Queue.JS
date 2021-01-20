function queueTime(customers, n) {
  checks = customers.splice(0, n);  
  if (checks.length < 1) return 0;
  customers.map((cst) => {    
    checks[checks.indexOf(Math.min(...checks))] += cst;
  });
  return Math.max(...checks);
}

console.log(queueTime([], 1));
// ar = [27, 24, 40, 13, 32, 14, 16, 50, 41, 24, 11, 20, 1, 45, 13, 32, 41, 14];
// console.log(Math.min(...ar));
// 27,26,9,12,17,6
// 35,35,13,13,10
// 43,20,24,26,16
