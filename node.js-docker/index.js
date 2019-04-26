const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi all!!");
});

app.listen(8080, () => {
  console.log("App running on port 8080");
});
