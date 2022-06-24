function sumArray(ar) {
  console.log("---- Sum Array ----");
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    total = total + ar[i];
  }
  console.log(total);
}
sumArray([1, 2, 3]);
sumArray([8, 1, 25]);
