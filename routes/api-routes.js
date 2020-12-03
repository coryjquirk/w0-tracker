const router = require("express").Router();
const Workout = require("../models/workout.js");

module.exports = module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
      Workout.find({})
        .then((data) => {
          res.json(data);
        }).catch((err) => {
          res.json(err);
        });
    });
    app.post("/api/workouts", function (req, res) {
      Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
          console.log("err", err)
          res.json(err)
        })
    });
    app.put("/api/workouts/:id", (req, res) => {
      Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body }}, {useFindAndModify: false})
        .then((data) => {
          res.json(data);
        }).catch((err) => {
          res.json(err);
        });
    });
    app.get("/api/workouts/range", (req, res) => {
      Workout.find({}).sort({ day: -1 }).limit(7)
        .then(data => {
          res.json(data)
        }).catch((err) => {
          res.json(err);
        });
    });
};
