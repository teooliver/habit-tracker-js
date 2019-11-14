import { combineReducers } from "redux";
import habitReducer from "./habitsReducer";

export default combineReducers({
  habits: habitReducer
});
