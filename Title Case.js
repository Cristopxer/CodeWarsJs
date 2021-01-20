function titleCase(title, minorWords) {
  title = title.toLowerCase().split(" ");  
  if(!minorWords) return title.map(word =>  {return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ');
  minorWords = minorWords.toLowerCase().split(" ");
  result = title.map((word) => {
    if (!minorWords.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }    
    return word;
  }).join(' ');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
