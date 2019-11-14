import axios from "axios";
import { GET_HABITS, ADD_POINT, REMOVE_POINT } from "./types";

export const getHabits = () => async dispatch => {
  const res = await axios.get("http://localhost:3001/habits");

  dispatch({
    type: GET_HABITS,
    payload: res.data
  });
};

export const addPoint = day => async dispatch => {
  const config = {
    "Content-Type": "application/json"
  };
  const res = await axios.post(
    "http://localhost:3001/habits",
    { day: day },
    config
  );

  dispatch({
    type: ADD_POINT,
    payload: res.data
  });
};

export const removePoint = id => async dispatch => {
  const config = {
    "Content-Type": "application/json"
  };
  const res = await axios.post("http://localhost:3001/habits", id);

  dispatch({
    type: REMOVE_POINT,
    payload: res.data
  });
};
