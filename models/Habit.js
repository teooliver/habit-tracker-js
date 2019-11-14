const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  events: [
    {
      date: {
        type: Date,
        unique: true
      }
    }
  ]
});

module.exports = Habit = mongoose.model("habit", HabitSchema);
