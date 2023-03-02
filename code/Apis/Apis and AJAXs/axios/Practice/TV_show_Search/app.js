const form = document.querySelector("#searchForm");
//Almaceno en una Variable lo que se va a escribir en el querySelector con el id search

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const inputQuery = form.elements.query.value;
  console.log("Submit.. :", "'", form.elements.query.value, "'");
  const config = { params: { q: inputQuery } }; //podria agregar que los muestre de mayor a menos score
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.log(res.data);
  showImage(res.data);
  form.elements.query.value = "";
});
//Creo un evento que va a ser escuchado cuando se cumpla la accion de "enviar" lo que va a levantar una funcion "asyncronica"
//con un callback que levanta una funcion que lograra evitar los valores predeterminados, antes de levantar el evento
//Almaceno el input del formulario especificando nada mas que el valor osea el string
//Ahora hago a una llamada a la API guardado la respuesta que me va a devolver, ademas la busqueda de la api tiene que contener el input del form
//Esto se hara de manera Syncronyca, lo que nos permine esperar la respuesta de la API y seguir navegando normalmente en la web
//Obtenemos la info de la busqueda y la adaptamos a la data que queremos. con data[x] obtenemos el primer objeto de pelicula y especificamos su atributo imagen.
//Le madno los datos recibidos a la funcion "showImage" y vuelvo a poner el valor de la query en vacio para una nueva busqueda

const showImage = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
//Ahora quiero lograr mostrar esa imagen en el front, por lo que creo un elemento IMG, y en su src almaceno la imagen de la API
//Con document.body.append logro poner el string de la imagen en el src
//Por cada resultado devuelve un show, recorre todo el array y toma cada imagen del mismo
