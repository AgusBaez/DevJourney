//Corregion de string en el array
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //Corregir columna 1 fila 2 y 4;
console.log(`Original array - [${leaderboard}]`);
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
console.log(`Chaged array - [${leaderboard}]`);

//Agregar y Sacar item en un array
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];
console.log(`Bad Array about planets - [${planets}]`);
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(`New Array Planets - [${planets}]`);

//Concatenacion
let allArray = planets.concat(leaderboard);
console.log(allArray);

//Reversa
allArray.reverse();
console.log(allArray);

//Slice
let slice = allArray.slice(1, 3);
//con negativo por ejemplo -3 los ultimos 3.
console.log(slice);

//splice
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
let nameList = ["Harry", "Lua", "Hermione", "Bellatrix"];
nameList.splice(1, 0, "Agustin");
console.log(nameList);
