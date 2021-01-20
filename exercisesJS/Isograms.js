function isIsogram(str) {
  seen = [];
  str = str.toLowerCase();
  for (let i = 0; i<str.length; i++){
      if(seen.includes(str[i])) return false;
      seen.push(str[i]);
  }
  return true;
}

console.log(isIsogram("moOse"));
