import React from "react";
import { connect } from "react-redux";
import { addPoint, removePoint } from "../../redux/actions/index";

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

  const foundDate = events.find(event => {
    const eventDate = new Date(event.date);
    if (
      eventDate.getDate() === date.getDate() &&
      eventDate.getMonth() === date.getMonth()
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      {foundDate ? (
        <td
          className="event"
          onClick={() => removePoint(habitId, foundDate._id)}
        >
          <i className="fas fa-circle" style={{ color: color }}></i>
        </td>
      ) : (
        <td className="event" onClick={() => addPoint(habitId, date)}></td>
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
