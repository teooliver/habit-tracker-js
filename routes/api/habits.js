const express = require("express");
const router = express.Router();
const Habit = require("../../models/Habit");

// @route     Get api/habits
// @desc      Get all habits
// @access    Public
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();

    if (habit.length === 0) {
      return res.status(404).json({ msg: "No habits found" });
    }

    res.json(habits);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/items
// @desc      Create item
// @access    Public
routet.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    let habit = await Habit.findOne({ name });
    if (habit) {
      return res.status(400).json({
        errors: [{ msg: "Habit already logged" }]
      });
    }

    habit = new Habit({
      name
    });

    await habit.save();
    res.json(habit);
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
