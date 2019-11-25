import React from "react";
import SelectMonthStyles from "../styledComponents/SelectMonthStyles";
import { connect } from "react-redux";
import { selectMonth } from "../../redux/actions/monthSelect";

const SelectMonth = ({ selectMonth, selectedMonth }) => {
  const monthsArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];

  return (
    <SelectMonthStyles>
      {monthsArray.map((month, index) => {
        if (selectedMonth === index) {
          return (
            <button
              className="active"
              onClick={() => {
                selectMonth(index);
              }}
            >
              {month}
            </button>
          );
        }
        return (
          <button
            onClick={() => {
              selectMonth(index);
            }}
          >
            {month}
          </button>
        );
      })}
    </SelectMonthStyles>
  );
};

const mapStateProps = ({ selectedMonth }) => {
  return {
    selectedMonth
  };
};

export default connect(mapStateProps, { selectMonth })(SelectMonth);
