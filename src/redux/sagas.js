import { put, takeEvery, all, call } from "redux-saga/effects";

function* ageFilter(action) {
  yield put({ payload: action.payload});
}

function* watchAgeFilter() {
  yield takeEvery("AGE", ageFilter);
}

export default function* rootSaga() {
  yield all([watchAgeFilter()]);
}
