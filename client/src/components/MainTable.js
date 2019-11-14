import React, { useEffect } from "react";
import MainTableStyles from "./styledComponents/MainTableStyles";
import { oddMonth } from "../utils/constants";
import { connect } from "react-redux";
import { getHabits, addPoint, removePoint } from "../redux/actions/index";

const MainTable = ({ habits, ...props }) => {
  useEffect(() => {
    props.getHabits();
  }, []);

  // ###### SANDBOX #######
  const filtered = habits.map(habit =>
    habit.events.filter(evt => evt._id !== "11")
  );
  console.log(filtered);

  // ###### SANDBOX #######

  const handleDone = (event, day) => {
    // console.log(date);
    if (event.day === day) {
      return (
        <i
          onClick={() => props.removePoint(event.id)}
          className="fas fa-circle"
          style={{ color: " blueviolet" }}
        ></i>
      );
    }
    return <td onClick={() => props.addPoint(day)}></td>;
  };

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
                <tr>
                  <td className="habit">
                    <i
                      className="fas fa-circle"
                      style={{ color: " blueviolet" }}
                    ></i>
                    {habit.name}
                  </td>
                  {oddMonth.map(day => (
                    <td key={day} className="color">
                      {habit.events.map(e => {
                        return handleDone(e, day);
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

export default connect(mapStateToProps, { getHabits, addPoint, removePoint })(
  MainTable
);
