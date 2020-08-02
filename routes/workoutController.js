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


router.get("/api/workouts/range", (req, res) => {
    
    // Look for workouts 7 days ago
    var week = new Date();
    week.setDate(week.getDate() - 7);
    Workout.find({ day: { $gte: week} })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch( err => {
        res.status(401).json(err);
    });
});

router.get("/api/workouts/within/:days", (req, res) => {
    
    // Look for workouts X days ago
    var d = new Date();
    d.setDate(d.getDate() - req.params.days);
    d.setHours(0,0,0,0);

    Workout.find({ day: { $gt: d} })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch( err => {
        res.status(401).json(err);
    });
})

module.exports = router;