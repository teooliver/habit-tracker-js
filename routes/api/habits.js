const express = require("express");
const router = express.Router();
const Habit = require("../../models/Habit");

// @route     Get api/habits
// @desc      Get all habits
// @access    Public
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();

    if (habits.length === 0) {
      return res.status(404).json({ msg: "No habits found" });
    }

    res.json(habits);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/habits
// @desc      Create habit
// @access    Public
router.post("/", async (req, res) => {
  const { name } = req.body;
  console.log("FROM SERVER", name);
  try {
    let habit = await Habit.findOne({ name });
    if (habit) {
      return res.status(400).json({
        errors: "Habit already logged"
      });
    }
    habit = new Habit({
      name
    });

    await habit.save();
    res.json(habit);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

// @route     DELETE api/habit/:id
// @desc      Delete habit
// @access    Public
router.delete("/:id", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ msg: "Item not found" });
    }
    await habit.remove();
    res.json(habit);
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(400).json({ msg: "Item not found" });
    }
  }
});

// @route     POST api/habit/:id/date
// @desc      Add Point item
// @access    Public
router.post("/:id/", async (req, res) => {
  try {
    const date = req.body.date;

    let habit = await Habit.findOneAndUpdate({
      _id: req.params.id,
      // needs to be unique?
      // "events.date": {
      //   $ne: date
      // },
      $addToSet: {
        events: {
          date
        }
      }
    });

    res.json(habit);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
