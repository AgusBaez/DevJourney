export const pokeApi = async (pokeId) => {
  try {
    const resp = await fetch(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
    ).then((data) => data);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

