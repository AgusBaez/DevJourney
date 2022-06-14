console.log(`My conditional`);
let ramd = Math.round(Math.random() * (10 - 0))
console.log(`This is the number "${ramd}" for my conditionl`);
if (ramd > 0.5) {
    console.log(`The num ramdon is greater than 0.5`);
} else {
    console.log(`The num ramdon is less than 0.5 :(`);
}
console.log(`Other Conditional, my number "${ramd}" is ever or not?`);

if(ramd %  2 === 0) {
    console.log("even")
}
console.log(`The end`);