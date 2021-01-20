
const name = '12345';
// const regex = /^+$/i;
console.log(name.slice(0,-4).replace(new RegExp(/./, 'g'), '#')+(name.slice(-4)));
// console.log(name.replace(regex,'#'))
// console.log(name);

