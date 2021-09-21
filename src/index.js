import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";
import { loadState, saveState } from "./localStorage";

const store = createStore(reducers, loadState(), applyMiddleware(thunk));

store.subscribe(() => saveState(store.getState()));

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
