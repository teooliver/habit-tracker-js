import axios from "axios";
import { GET_HABITS } from "./types";

export const getHabits = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/habits");

  dispatch({
    type: GET_HABITS,
    payload: res.data
  });
};

export const addPoint = () => async dispatch => {
  const res = await axios.post("http://localhost:3001/habits");

  dispatch({
    type: GET_HABITS,
    payload: res.data
  });
};

export const removePoint = () => async dispatch => {
  const res = await axios.delete("http://localhost:3001/habits");

  dispatch({
    type: GET_HABITS,
    payload: res.data
  });
};
