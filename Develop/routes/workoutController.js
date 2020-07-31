const router = require("express").Router();
const { Workout } = require("../models");
const workoutSchema = require("../models/WorkoutSchema");

router.post("/api/workouts", (req,res) => {
    Workout.create(req.body)
        .then(dbWorkouts => {
            res.json(dbWorkouts)
        })
        .catch( err => {
            res.status(401).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch( err => {
            res.status(401).json(err);
        });
    });

router.put("/api/workouts/:id", (req, res) => {
    req.body;
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body } },
        { new: true, runValidators: true}
    )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch( err => {
        res.status(401).json(err);
    });
});


// router.post("/api/workouts", (req, res) => {
//     Workout.getWorkoutsInRange(req.body)
//     .then(dbWorkouts => {
//         res.json(dbWorkouts)
//     })
//     .catch (err => {
//         res.status(401).json(err);
//     });

// })
// need getWorkoutsInRange route
// POST route for createWorkout
module.exports = router;