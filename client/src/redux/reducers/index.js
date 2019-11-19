import { combineReducers } from "redux";
import habitReducer from "./habitsReducer";
import selectMonthReducer from "./selectMonthReducer";

export default combineReducers({
  habits: habitReducer,
  selectedMonth: selectMonthReducer
});
