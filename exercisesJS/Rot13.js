function validateUpper(c) {
  if (c.match(/[a-z]/g)) return 0;
  return 1;
}
function rot13(message) {
//   var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   msg = message.split("");  
//   var res = [];
//   next = 0;
//   upper = false;
//   msg.map((c) => {
//     if (alphabet.indexOf(c.toLowerCase()) == -1) {
//       res.push(c);
//     } else {
//       if (validateUpper(c)) {
//         upper = true;
//         c = c.toLowerCase();
//       }
//       next = alphabet.indexOf(c) + 13;      
//       if (next >= alphabet.length) next -= alphabet.length;      
//       if (upper) {
//         upper = false;
//         res.push(alphabet[next].toUpperCase());
//       } else {
//         res.push(alphabet[next]);
//       }
//     }
//   });
//   return res.join("");
    a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
}

console.log(rot13("TEst ,"));
