import React, { useEffect } from "react";
import MainTableStyles from "../styledComponents/MainTableStyles";
import { connect } from "react-redux";
import { getHabits, removeHabit } from "../../redux/actions";
import Habit from "./Habit";
import tree_swing from "../../images/undraw_Tree_swing_646s.svg";

const MainTable = ({ habits, selectedMonth, ...props }) => {
  useEffect(() => {
    props.getHabits();
  }, []);

  const daysOnSelectedMonth =
    new Date(2019, selectedMonth + 1, 0).getDate() + 1;

  let daysArray = [];
  const renderTableHeader = daysOnSelectedMonth => {
    for (let i = 1; i < daysOnSelectedMonth; i++) {
      daysArray.push(`${i}`);
    }
  };

  const checkHabits = habits.length !== 0;

  return (
    <>
      {checkHabits ? (
        <MainTableStyles>
          <thead>
            <tr>
              <th></th>
              {renderTableHeader(daysOnSelectedMonth)}
              {daysArray.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {habits.map((habit, index) => (
              <Habit habit={habit} index={index} daysArray={daysArray} />
            ))}
          </tbody>
        </MainTableStyles>
      ) : (
        <div className="center">
          <img src={tree_swing} alt="" />
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ habits, selectedMonth }) => {
  return {
    habits,
    selectedMonth
  };
};

export default connect(mapStateToProps, {
  getHabits,
  removeHabit
})(MainTable);
