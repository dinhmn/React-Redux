import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { counterSlice } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to logger store state
const loggerMiddleware = (store) => (next) => (action) => {
  // your code here
  console.log(action);
  action.payload = 10;
  // delete action.payload
  next(action);
};
// ? redux-logger
// const loggerMiddleware = function (store)
//   return function (next) {
//     return function (action) {
//       // your code here
//     }
//   }
// };
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, loggerMiddleware),
});

store.subscribe(() => {
  //
});

export default store;
