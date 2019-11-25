import { combineReducers } from "redux";
import habitReducer from "./habitsReducer";
import selectMonthReducer from "./selectMonthReducer";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";

export default combineReducers({
  habits: habitReducer,
  selectedMonth: selectMonthReducer,
  alerts: alertReducer,
  auth: authReducer
});
