const square = function (num) {
  console.log(`---- Square Method ${num} ----`);
  let result = Math.pow(num, 2);
  console.log(result);
  return result;
};
square(2);
square(4);
square(9);
