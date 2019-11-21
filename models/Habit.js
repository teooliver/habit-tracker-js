const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  date: {
    type: Date,
    required: true
    // unique: true
  }
});

const HabitSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  events: [EventsSchema]
});

module.exports = Habit = mongoose.model("habit", HabitSchema);
