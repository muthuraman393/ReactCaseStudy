import React from "react";
import { render } from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import  createLogger  from 'redux-logger'
import rootReducer from "./reducers";
import App from "./components/App";

const middleware = thunk;
/*if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}*/
const store = createStore(rootReducer,applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
