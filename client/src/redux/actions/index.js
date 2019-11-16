import axios from "axios";
import {
  GET_HABITS,
  ADD_POINT,
  REMOVE_POINT,
  CREATE_HABIT,
  REMOVE_HABIT
} from "./types";

export const getHabits = () => async dispatch => {
  const res = await axios.get("/api/habits/");

  dispatch({
    type: GET_HABITS,
    payload: res.data
  });
};

export const createHabit = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const res = await axios.post("/api/habits/", formData, config);

  console.log(res.data);

  dispatch({
    type: CREATE_HABIT,
    payload: res.data
  });
};

export const removeHabit = id => async dispatch => {
  console.log("REMOVE", id);
  const res = await axios.delete(`api/habits/${id}`);
  dispatch({
    type: REMOVE_HABIT,
    payload: res.data
  });
};

export const addPoint = (id, date) => async dispatch => {
  console.log("From addPoint");
  const config = {
    "Content-Type": "application/json"
  };
  const res = await axios.post(`api/habits/${id}`, date, config);
  dispatch({
    type: ADD_POINT,
    payload: res.data
  });
};

export const removePoint = id => async dispatch => {
  const config = {
    "Content-Type": "application/json"
  };
  const res = await axios.post("http://localhost:3001/habits", id, config);

  dispatch({
    type: REMOVE_POINT,
    payload: res.data
  });
};
