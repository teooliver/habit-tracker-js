import { GET_HABITS, ADD_POINT, REMOVE_POINT } from "../actions/types";

const habitReducer = (state = [], action) => {
  switch (action.type) {
    case GET_HABITS:
      return action.payload;
    case ADD_POINT:
      console.log("from ADD_POINT");
      return [...state, action.payload];
    case REMOVE_POINT:
      console.log("from REMOVE_POINT");
      return state.map(habit =>
        habit.events.filter(evt => evt !== action.payload)
      );
    default:
      return state;
  }
};

export default habitReducer;
