function encrypt(text, n) {
  if (text == null || text.length < 1 || n < 1) return text;
  for (let j = 0; j < n; j++) {
    secondArray = "";
    aux = "";
    for (let i = 0; i < text.length; i++) {
      i % 2 !== 0
        ? (secondArray += text.substr(i, 1))
        : (aux += text.substr(i, 1));
    }
    text = secondArray + aux;
  }
  return text;
}

function decrypt(eText, n) {
  //   if (encryptedText == null || encryptedText.length < 1 || n < 1) return text;
  //   for (let j = 0; j < n; j++) {
  //     result = "";
  //     secondChars = encryptedText.slice(0, encryptedText.length / 2);
  //     firstChars = encryptedText.slice(encryptedText.length / 2);
  //     for (let i = 0; i < encryptedText.length / 2; i++) {
  //       result += `${firstChars[i] || ""}${secondChars[i] || ""}`;
  //     }
  //     encryptedText = result;
  //   }
  //   return encryptedText;
  if (eText == null || eText.length < 1 || n < 1) return eText;
  for (let i = 0; i < n; i++) {
    result = "";
    secondChars = eText.slice(0, eText.length / 2);
    firstChar = eText.slice(eText.length / 2);
    for (let j = 0; j < eText.length / 2; j++) {
      result += `${firstChars[j] || ""}${secondChars[j] || ""}`;
    }
    eText = result;
  }
  return eText;
}

console.log(encrypt("This is a test!", 2));
console.log(decrypt("hsi  etTi sats!", 1));
