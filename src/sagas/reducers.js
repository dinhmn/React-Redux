import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "./news-thor/newsSlice";

export const reducer = combineReducers({
  news: newsSlice,
});
