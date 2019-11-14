import { GET_HABITS } from "../actions/types";

const habitReducer = (state = [], action) => {
  switch (action.type) {
    case GET_HABITS:
      return action.payload;
    default:
      return state;
  }
};

export default habitReducer;
