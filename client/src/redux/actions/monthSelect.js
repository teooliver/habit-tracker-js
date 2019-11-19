import { SELECT_MONTH } from "./types";

export const selectMonth = month => async dispatch => {
  try {
    const selectedMonth = month;

    dispatch({
      type: SELECT_MONTH,
      payload: selectedMonth
    });
  } catch (error) {
    console.log(error);
  }
};
