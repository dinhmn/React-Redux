import { getNews } from "./newsSlice";
import { takeLatest } from "redux-saga/effects";
import handleGetUser from "./handler";
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function* newsSaga() {
  yield takeLatest(getNews.type, handleGetUser);
}
// CMS: Wordpress
// Catches
