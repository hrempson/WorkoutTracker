const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./public/api")
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true, useFindAndModify: false});

//     db.Continue.create({ name: "Contintue Workout" })
//     .then(dbContinue => {
//         console.log(dbContinue);
//     })
//     .catch(({message}) => {
//         console.log(message);
//     });

// app.get("/exercise?"), (req, res) => {
//     db.Workout(lastWorkout).find({read: true}, (error, found) => {
//         if (error) {
//             console.log(error);
//         } else {
//             res.json(found);
//         }
//     });
//     }


  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });