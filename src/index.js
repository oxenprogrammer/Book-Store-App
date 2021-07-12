import "./index.css";

import App from "./components/App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { reducer } from "./reducers";
import reportWebVitals from "./reportWebVitals";

const randomId = () => Math.floor(Math.random() * 1000);

const initialState = {
  books: [
    {
      id: randomId,
      title: "Enter the Dragon",
      category: "Action",
      pages: 34,
      read: false,
    },
    {
      id: randomId,
      title: "Eastern Condors",
      category: "History",
      pages: 74,
      read: false,
    },
    {
      id: randomId,
      title: "The Big Boss",
      category: "Action",
      pages: 84,
      read: true,
    },
  ],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
