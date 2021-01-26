const mod4 = (num) => {
 const regExp = new RegExp(/.{2}\]$/);
 return regExp.exec(num);
}

console.log(mod4("[006623]"))