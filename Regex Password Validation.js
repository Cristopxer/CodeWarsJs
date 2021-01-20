function validate(password) {
  console.log(password);
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/.test(password);
}
console.log(validate("fjd  3IR9"));
console.log(validate("4fdg5Fj3"));
