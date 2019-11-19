import React from "react";
import { connect } from "react-redux";
import { addPoint, removePoint } from "../redux/actions/index";

export const HabitEvent = ({
  events,
  day,
  habitId,
  addPoint,
  removePoint,
  color,
  selectedMonth
}) => {
  const date = new Date(2019, selectedMonth, day);
  console.log("DATE: ", date);

  const foundDate = events.find(event => {
    return event.date === parseInt(day);
  });

  return (
    <>
      {foundDate ? (
        <td
          className="point"
          onClick={() => removePoint(habitId, foundDate._id)}
        >
          <i className="fas fa-circle" style={{ color: color }}></i>
        </td>
      ) : (
        <td className="point" onClick={() => addPoint(habitId, day)}></td>
      )}
    </>
  );
};

const mapStateToProps = ({ selectedMonth }) => {
  return {
    selectedMonth
  };
};

export default connect(mapStateToProps, { addPoint, removePoint })(HabitEvent);
