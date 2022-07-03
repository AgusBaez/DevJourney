const container = document.querySelector("#container");

const pokeURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 151; i++) {
  const pokeImg = document.createElement("div");
  const pokeCard = document.createElement('span');
  pokeCard.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${pokeURL}${i}.png`;
  
  pokeImg.appendChild(pokeCard)
  pokeImg.appendChild(newImg)
  container.appendChild(pokeImg);
}
