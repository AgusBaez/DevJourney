fetch("https://swapi.dev/api/people")
  .then((res) => {
    console.log("Resolve¡¡", res);
  })
  .catch((e) => {
    console.log("Error¿¿", e);
  });
