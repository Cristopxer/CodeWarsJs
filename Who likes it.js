function likes(names) {
  const namesLength = names.length;
  switch (namesLength) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      numberLikes = names.slice(2).length;
      return `${names[0]}, ${names[1]} and ${numberLikes} others like this`;
  }
}

const name = ['Alex', 'Jacob', 'Mark', 'Max'];
console.log(likes(name));
