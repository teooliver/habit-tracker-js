import React from "react";
import HabitEvent from "./HabitEvent";
import { oddMonth } from "../utils/constants";
import { connect } from "react-redux";
import { removeHabit } from "../redux/actions/index";

const Habit = (habit, removeHabit) => {
  return (
    <tr>
      <td className="habit" onClick={() => props.removeHabit(habit._id)}>
        <i className="fas fa-circle" style={{ color: " blueviolet" }}></i>
        {habit.name}
      </td>
      {oddMonth.map(date => (
        <HabitEvent date={date} habitId={habit.id} events={habit.events} />
      ))}
    </tr>
  );
};

export default connect(null, { removeHabit })(Habit);
