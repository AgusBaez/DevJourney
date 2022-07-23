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

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
};
getStarWarsPerson(1);
getStarWarsPerson(5);
