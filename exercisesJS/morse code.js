code = ' . ';
code = code.split('   ');
newCode = '';
for (let word in code){
    word = code[word].split(' ');      
    for (let letter in word){
        if(word[letter] != "\n"){
            // console.log(word[letter]);
            newCode = newCode + word[letter];
        }       
    }
    newCode = newCode + ' ';        
}
console.log(newCode.trim());
