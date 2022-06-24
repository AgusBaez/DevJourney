function returnDay(day) {
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day < 1 || day > 7) {
    console.log("No es un dia de la semana");
    return null;
  } else {
    //Usar el numero de input para devovler de un array el dia deseado
    let dayWeek = week[day - 1];
    console.log(`You select: ${dayWeek}`);
  }
}
returnDay(0);
returnDay(1);
returnDay(2);
returnDay(3);
returnDay(4);
returnDay(5);
returnDay(6);
returnDay(7);
