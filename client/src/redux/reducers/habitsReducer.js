import {
  GET_HABITS,
  ADD_POINT,
  REMOVE_POINT,
  CREATE_HABIT,
  REMOVE_HABIT
} from "../actions/types";

const habitReducer = (state = [], action) => {
  switch (action.type) {
    case GET_HABITS:
      return action.payload;

    case CREATE_HABIT:
      return [...state, action.payload];

    case REMOVE_HABIT:
      return state.filter(habit => habit._id !== action.payload._id);

    case ADD_POINT:
      return state.map(habit =>
        habit._id === action.payload._id
          ? { ...habit, events: action.payload.events }
          : habit
      );

    case REMOVE_POINT:
      return state.map(habit =>
        habit._id === action.payload._id
          ? { ...habit, events: action.payload.events }
          : habit
      );

    default:
      return state;
  }
};

export default habitReducer;
