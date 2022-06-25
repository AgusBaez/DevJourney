const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg: function () {
    this.eggCount++;
    return "EGG";
  },
};
console.log("--- this Method ---");
console.log(hen.name);
console.log(`egg Count = ${hen.eggCount}`);
hen.layAnEgg();
hen.layAnEgg();
console.log(`egg Count = ${hen.eggCount}`);
