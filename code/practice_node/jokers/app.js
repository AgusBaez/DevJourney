import joke from "give-me-a-joke";
import colors from "colors";
console.table(joke);

// To get a random dad joke
joke.getRandomDadJoke(function (joke) {
  console.log(`${joke}`.rainbow);
});
