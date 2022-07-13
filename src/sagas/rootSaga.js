import { all, fork } from "redux-saga/effects";
import newsSaga from "./news-thor/saga";

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}
