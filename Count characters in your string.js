function xd (text){
    seen = {}
    for (let i = 0; i < text.length; i++){
        !seen[text[i]] ? seen[text[i]] = 1 : seen[text[i]]++;        
    }
    return seen;
}
console.log(xd('aba'))