const quarterOf = (month) => {
  // Your code here
  return Math.ceil(month / 3);
};
for (let i = 1; i <= 12; i++) {
  console.log(quarterOf(i));
}
