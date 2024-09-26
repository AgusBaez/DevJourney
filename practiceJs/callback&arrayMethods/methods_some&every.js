console.log("--- Pares ----");
const allEvens = (arrNum) => {
  const pares = arrNum.every((ele) => ele % 2 === 0);
  console.log(pares);
};
allEvens([2, 4, 6, 8]);
allEvens([1, 2, 4, 6, 8]);
