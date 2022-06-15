//Corregion de string en el array
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //Corregir columna 1 fila 2 y 4;
console.log(`Original array - [${leaderboard}]`);
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
console.log(`Chaged array - [${leaderboard}]`);

//Agregar y Sacar item en un arrat
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!
console.log(`Bad Array about planets - [${planets}]`);
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(`New Array Planets - [${planets}]`);

//Concatenacion
let allArray = planets.concat(leaderboard); console.log(allArray);
