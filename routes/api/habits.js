const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Habit = require("../../models/Habit");

// @route     Get api/habits
// @desc      Get all habits
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });

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
// @access    Private
router.post("/", auth, async (req, res) => {
  const { name } = req.body;

  try {
    let habit = await Habit.findOne({ name });

    if (habit) {
      return res.status(400).json({
        errors: "Habit already logged"
      });
    }
    habit = new Habit({
      user: req.user.id,
      name
    });

    await habit.save();
    res.json(habit);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

// @route     DELETE api/habits/:id
// @desc      Delete habit
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ msg: "Item not found" });
    }
    // Check user
    if (habit.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await habit.remove();
    res.json(habit);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ msg: "Habit not found" });
    }
  }
});

// @route     POST api/habit/:id/
// @desc      Add Event Point
// @access    Public
router.post("/:id/", async (req, res) => {
  try {
    const { date } = req.body;

    const habit = await Habit.findOneAndUpdate(
      {
        _id: req.params.id,
        "events.date": {
          $ne: date
        }
      },
      {
        $addToSet: {
          events: {
            date
          }
        }
      },
      { new: true }
    );

    res.json(habit);
  } catch (error) {
    console.log(error);
  }
});

// @route     DELETE api/habit/:id/:eventId
// @desc      Remove Event Point
// @access    Public
router.delete("/:id/:eventId", async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $pull: {
          events: {
            _id: req.params.eventId
          }
        }
      },
      { new: true }
    );

    res.json(habit);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
