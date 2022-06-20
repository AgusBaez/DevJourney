let max_num = parseInt(prompt("Enter the Maxmimum number!"));
while (!max_num) {
  max_num = parseInt(prompt("Enter a valid NUMBER! - PLS!! - "));
}
const answer = Math.floor(Math.random() * max_num) + 1;

let guess = parseInt(
  prompt(`The max number is ${max_num} - Enter first Guess`)
);

let contador = 1;

while (guess !== answer) {
  contador++;
  if (guess > answer) {
    guess = parseInt(prompt(`${guess} is Too High¡ - Enter New guess: `));
  } else {
    guess = parseInt(prompt(`${guess} is Too Low! - Enter New guess: `));
  }
}
console.log(`You win - intentos: ${contador}`);
