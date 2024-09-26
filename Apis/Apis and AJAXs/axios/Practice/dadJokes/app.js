// axios.get("https://swapi.dev/api/people")
//   .then((res) => {
//     console.log("GET: ", res);
//   })
//  .catch (e => {
//      console.log('ERROR', e);
//  });

/*
Function async
*/

// const getStarWarsPerson = async (id) => {
//   const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//   console.log(res.data);
// };
// getStarWarsPerson(1);
// getStarWarsPerson(5);

/*
Envolver todo en Try Catch es buena practica para manejar errores
*/

// ======== PRUEBA PARA OBTENER POR API junto con AXIOS PERSONAJES DE STARS WARS ============= //

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     return console.log(res.data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getStarWarsPerson(1);
// getStarWarsPerson(5);

// ======== PRUEBA PARA OBTENER POR API JUNTO CON AXIOS CHISTES QUE DIRIA UN PADRE ============= //

//Interaccion con el DOM
const dataJoke = document.querySelector("#dataJoke");
const button = document.querySelector("button");

//Es una funcion ASYNC.
const addNewJoke = async () => {
  try {
    const callJoke = await getJokeDad();
    const newLI = document.createElement("LI");
    newLI.append(callJoke);
    dataJoke.append(newLI);
  } catch (error) {
    console.log(error);
    return 'Oh.. error, not exist any one joke available.. Ups'
  }
};

//Funcion Async
const getJokeDad = async () => {
  try {
    // *Configuracion necesaria para que devuelva un objeto con formato JSON y no un formato text/http*
    const setHeaderConfig = {
      headers: {
        Accept: "application/json",
      },
    };

    const dadJoke = await axios.get(
      "https://icanhazdadjoke.com/",
      setHeaderConfig
    );
    //Retorna un objeto con los datos obtenidos.
    return dadJoke.data.joke;
  } catch (error) {
    return console.log(error);
  }
};

button.addEventListener("click", addNewJoke);
