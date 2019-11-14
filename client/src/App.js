import React from "react";
import "./App.css";
import MainTable from "./components/MainTable";
//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Habit Tracker</h1>
        <h2>Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec</h2>
        <MainTable />
      </div>
    </Provider>
  );
};

export default App;
