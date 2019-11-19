import React from "react";
import SelectMonthStyles from "./styledComponents/SelectMonthStyles";
import { connect } from "react-redux";
import { selectMonth } from "../../src/redux/actions/monthSelect";

const SelectMonth = ({ selectMonth, selectedMonth }) => {
  // use selectedMonth to make active className
  console.log(selectedMonth);
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

  // const test = () => {
  //   monthsArray.map((month, index) => {
  //     console.log(month);
  //     if (selectedMonth === index) {
  //       console.log("Hello");
  //     }
  //   });
  // };

  // test();

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
