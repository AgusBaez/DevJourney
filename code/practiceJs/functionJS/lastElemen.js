function lastElement(arry) {
  console.log("---- LastElement ----");
  const lastItem = arry[arry.length - 1];
  if (lastItem !== undefined) {
    console.log(lastItem);
    return lastItem;
  } else {
    return null;
  }
}
lastElement([1, 2, 3, 4, 5]);
lastElement(["Hello", "GoodBye"]);
