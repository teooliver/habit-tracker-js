import React from "react";
import { connect } from "react-redux";
import { addPoint, removePoint } from "../redux/actions/index";

export const HabitEvent = ({ events, day, addPoint, removePoint }) => {
  const foundDate = events.find(event => {
    event.date === day;
  });

  return (
    <>
      {foundDate ? (
        <td>
          <i
            onClick={() => removePoint(event.id)}
            className="fas fa-circle"
            style={{ color: " blueviolet" }}
          ></i>
        </td>
      ) : (
        <td onClick={() => addPoint(habit._id, day)}></td>
      )}
    </>
  );
};

export default connect(null, { addPoint, removePoint })(HabitEvent);
