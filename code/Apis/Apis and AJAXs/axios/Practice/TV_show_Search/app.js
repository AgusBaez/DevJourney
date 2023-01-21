const { default: axios } = require("axios");

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const inputQuery = form.elements.query.value;
    console.log("Submit.. :", "'", form.elements.query.value, "'");
    const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${inputQuery}`
    );

    console.log(res.data[0].show.image.meduim);
    //me quede en la parte del video 6:50
});
