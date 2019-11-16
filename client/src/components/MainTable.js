import React, { useEffect } from "react";
import MainTableStyles from "./styledComponents/MainTableStyles";
import { oddMonth } from "../utils/constants";
import { connect } from "react-redux";
import {
  getHabits,
  addPoint,
  removePoint,
  removeHabit
} from "../redux/actions/index";

const MainTable = ({ habits, ...props }) => {
  useEffect(() => {
    props.getHabits();
  }, []);

  // ###### SANDBOX #######
  // const filtered = habits.map(habit =>
  //   habit.events.filter(evt => evt._id !== "11")
  // );
  // console.log("Filtered: ", filtered);

  // ###### SANDBOX #######

  // const handleDone = (habit, event, day) => {
  //   // console.log(habit._id, event, day);
  //   if (event.day === day) {
  //     return (
  //       <i
  //         onClick={() => props.removePoint(event.id)}
  //         className="fas fa-circle"
  //         style={{ color: " blueviolet" }}
  //       ></i>
  //     );
  //   }
  //   return <div onClick={() => console.log("clicked the div")}></div>;
  // };

  return (
    <>
      <MainTableStyles>
        <thead>
          <tr>
            <th></th>
            {oddMonth.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {habits.map(habit => {
            return (
              <>
                <tr key={habit._id}>
                  <td
                    className="habit"
                    onClick={() => props.removeHabit(habit._id)}
                  >
                    <i
                      className="fas fa-circle"
                      style={{ color: " blueviolet" }}
                    ></i>
                    {habit.name}
                  </td>
                  {oddMonth.map(day => (
                    <td key={day} className="color">
                      {habit.events.map(evt => {
                        return handleDone(habit, evt, day);
                      })}
                    </td>
                  ))}
                </tr>
              </>
            );
          })}
        </tbody>
      </MainTableStyles>
    </>
  );
};

const mapStateToProps = ({ habits }) => {
  return {
    habits
  };
};

export default connect(mapStateToProps, {
  getHabits,
  addPoint,
  removePoint,
  removeHabit
})(MainTable);
