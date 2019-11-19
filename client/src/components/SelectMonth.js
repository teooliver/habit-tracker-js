import React from "react";
import SelectMonthStyles from "./styledComponents/SelectMonthStyles";
import { connect } from "react-redux";
import { selectMonth } from "../../src/redux/actions/monthSelect";

const SelectMonth = ({ selectMonth, selectedMonth }) => {
  // use selectedMonth to make active className

  return (
    <SelectMonthStyles>
      <button
        onClick={() => {
          selectMonth(1);
        }}
      >
        Jan
      </button>
      <button
        onClick={() => {
          selectMonth(2);
        }}
      >
        Feb
      </button>
      <button
        onClick={() => {
          selectMonth(3);
        }}
      >
        Mar
      </button>
      <button
        onClick={() => {
          selectMonth(4);
        }}
      >
        Apr
      </button>
      <button
        onClick={() => {
          selectMonth(5);
        }}
      >
        May
      </button>
      <button
        onClick={() => {
          selectMonth(6);
        }}
      >
        Jun
      </button>
      <button
        onClick={() => {
          selectMonth(7);
        }}
      >
        Jul
      </button>
      <button
        onClick={() => {
          selectMonth(8);
        }}
      >
        Aug
      </button>
      <button
        onClick={() => {
          selectMonth(9);
        }}
      >
        Sept
      </button>
      <button
        onClick={() => {
          selectMonth(10);
        }}
      >
        Oct
      </button>
      <button
        onClick={() => {
          selectMonth(11);
        }}
      >
        Nov
      </button>
      <button
        onClick={() => {
          selectMonth(12);
        }}
      >
        Dec
      </button>
    </SelectMonthStyles>
  );
};

const mapStateProps = ({ selectedMonth }) => {
  return {
    selectedMonth
  };
};

export default connect(mapStateProps, { selectMonth })(SelectMonth);
