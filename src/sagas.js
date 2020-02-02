import { all, put, call, takeLatest } from "redux-saga/effects";
import { GET_USERS, PUT_USERS, GET_ALBUMS, PUT_ALBUMS } from "./actions";

function fetchDataUsers() {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  ).then(response => response.json());
}

function* getUsersAsync() {
  try {
    const data = yield call(fetchDataUsers);
    yield put({ type: PUT_USERS, payload: data });
  } catch (error) {
    alert("Error loading users");
  }
}

function* watchGetUsersAsync() {
  yield takeLatest(GET_USERS, getUsersAsync);
}

function fetchDataAlbums(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  ).then(response => response.json());
}

function* getAlbumsAsync({ payload }) {
  try {
    const data = yield call(() => fetchDataAlbums(payload));
    yield put({ type: PUT_ALBUMS, payload: data });
  } catch (error) {
    alert("Error loading albums");
  }
}

function* watchGetAlbumsAsync() {
  yield takeLatest(GET_ALBUMS, getAlbumsAsync);
}

export default function* rootSaga() {
  yield all([watchGetUsersAsync(), watchGetAlbumsAsync()]);
}
