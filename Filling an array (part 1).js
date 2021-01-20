function arr(n) {    
    // return n == undefined ? [] :[...Array(n)].reduce((acc, _, index) => [...acc,index], []);
    return [...Array(n||0).keys()];
}

console.log(arr());
