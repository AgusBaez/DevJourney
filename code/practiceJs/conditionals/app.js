console.log(`My conditionals`);
let ramd = Math.round(Math.random() * (10 - 0));

console.log(`This is the number "${ramd}" for my conditionl`);
if (ramd > 0.5) {
  console.log(`The num ramdon is greater than 0.5`);
} else {
  console.log(`The num ramdon is less than 0.5 :(`);
}

console.log(`Other Conditional, my number "${ramd}" is even or not?`);

if (ramd % 2 === 0) {
    console.log("even");
} else {
    console.log(`Not even`);
}

console.log(`Classification according to the age of the people`);
let age = Math.round(Math.random() * (100 - 0));
console.log(age);
if (age < 5) {
  console.log(`This person is the age of a baby`);
} else if (age < 17) {
  console.log(`this person is the age of a teenager`);
} else if (age < 23) {
  console.log(`this person is the age of a adult teen`);
} else if (age < 35) {
  console.log(`this person is the age of a adult`);
} else if (age < 60) {
    console.log(`this person is the age of a adult`);
} else if (age < 100) {
  console.log(`this person is the age of a senior`);
} else {
  console.log(`This person is die`);

}

console.log(`The end`);
