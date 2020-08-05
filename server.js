const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./public/api")
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect( "mongodb://localhost/workout", {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

app.use(require("./routes"));
app.set("port", PORT);

  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });