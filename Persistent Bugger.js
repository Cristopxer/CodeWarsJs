// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num){
    count = 0;       
    start = true
    numbers = num.toString().split('');
    while(start){                
        if (numbers.length > 1){ 
            mult = 1;           
            numbers.map((n) => mult = mult * n);            
            numbers = mult.toString().split('');
            count++
        }else{
            start = false;
        }               
    }
    return(count);
}
console.log(persistence(25));