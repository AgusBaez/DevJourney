const express = require("express");
const app = express();

app.get("/some/:any_param", (req, res) => {
  console.log(req.param);
  res.send("This is a route whit a param in the link");
});

app.get("/some", (req, res) => {
  res.send("This is a GET response");
});

app.post("/some", (req, res) => {
  res.send("This is a POST response, not iqual");
});

app.get("*", (_req, res) => {
  res.send("This cath every rute or every path, `*` = all ");
});

app.use((req, res) => {
  try {
    console.log("BACK A RESPONSE");
    // https://expressjs.com/en/4x/api.html#req
    //console.dir(req);
    //   https://expressjs.com/en/4x/api.html#res
    //console.dir(res);

    res.send(`<h1>WELCOME TO THE HOME EVERY PAGE</h1>`);
  } catch (error) {
    console.log(error);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
