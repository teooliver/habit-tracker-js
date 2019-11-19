import { SELECT_MONTH } from "../actions/types";

const currentMonth = new Date();
const initialState = currentMonth.getMonth() + 1;

const selectMonthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MONTH:
      return action.payload;
    default:
      return state;
  }
};

export default selectMonthReducer;

// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
