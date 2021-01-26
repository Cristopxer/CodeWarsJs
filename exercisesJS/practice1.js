const xd = (num) => {
  num = num.toString(2);
  gap = [];
  aux = "";
  prevDigt = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 1) {
      prevDigt = num[i];
      if (aux.length > 0) {
        gap.push(aux);
        aux = "";
      }
    }
    if (prevDigt == 1 && num[i] == 0) {
      aux = aux.concat(num[i]);
    }
  }
  return gap.length ? Math.max(...gap.map((el) => el.length)) : 0;  
};

console.log(xd(1041));