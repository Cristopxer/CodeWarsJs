function tribonacci(signature,n){
    //your code here
    // if (n == 0) return signature.slice(0,n);
    // for (let i = 0; i < n-3; i++){
    //     sum = signature[i]+signature[i+1]+signature[i+2]
    //     signature.push(sum)            
    // }
    // return signature;
    return   [...Array(n)].reduce((pre, _, idx) => [...pre, pre[idx] + pre[++idx] + pre[++idx]], signature).slice(0, n);
  }

  console.log(tribonacci([1,2,3],4));