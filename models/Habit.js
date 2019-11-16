const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  date: {
    type: Number,
    required: true
    // unique: true
  }
});

const HabitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  events: [EventsSchema]
});

module.exports = Habit = mongoose.model("habit", HabitSchema);
