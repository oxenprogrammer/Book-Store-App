import "./index.css";

import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createStore } from "redux";
import { reducer } from "./reducers";
import reportWebVitals from "./reportWebVitals";

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: "Enter the Dragon",
      category: "Action",
      pages: 34,
      read: "No",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "Eastern Condors",
      category: "History",
      pages: 74,
      read: "No",
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: "The Big Boss",
      category: "Action",
      pages: 84,
      read: "Yes",
    },
  ],
};

const store = createStore(
  reducer,
  initialState,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
