import React from "react";
import HabitEvent from "./HabitEvent";
import { connect } from "react-redux";
import { removeHabit } from "../redux/actions/index";

const colors = [
  "#4c4e58",
  "#abc3e7",
  "#e7cfab",
  "#abe7cf",
  "#f4c6bc",
  "#ffb3ba",
  "#ffdfba",
  "#baffc9",
  "#bae1ff"
];
const n = colors.length; // colors lenght

const Habit = ({ habit, removeHabit, index, daysArray }) => {
  return (
    <tr>
      <td className="habit" onClick={() => removeHabit(habit._id)}>
        <i
          className="fas fa-circle"
          style={{ color: colors[((index % n) + n) % n] }}
        ></i>
        {habit.name}
      </td>
      {daysArray.map(day => (
        <HabitEvent
          day={day}
          habitId={habit._id}
          events={habit.events}
          color={colors[((index % n) + n) % n]}
        />
      ))}
    </tr>
  );
};

export default connect(null, { removeHabit })(Habit);
