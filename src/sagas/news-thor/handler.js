import { call, put } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export default function* handleGetUser(action) {
  try {
    const response = yield call(requestGetNews);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
