import React, { useEffect } from "react";
import MainTableStyles from "./styledComponents/MainTableStyles";
import { oddMonth } from "../utils/constants";
import { connect } from "react-redux";
import { getHabits } from "../redux/actions/index";

const MainTable = ({ habits, ...props }) => {
  useEffect(() => {
    props.getHabits();
  }, []);

  const handleDone = (date, day) => {
    console.log(date);
    if (date === day) {
      return <i className="fas fa-circle" style={{ color: " blueviolet" }}></i>;
    }
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
                        return handleDone(e.day, day);
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

export default connect(mapStateToProps, { getHabits })(MainTable);
