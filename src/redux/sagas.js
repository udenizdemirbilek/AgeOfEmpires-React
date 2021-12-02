import { put, takeEvery, all } from "redux-saga/effects";

//Worker Saga
function* ageFilter(action) {
  yield put({ type: "AGE", payload: action.payload});
}

function* costFilter(action) {
  yield put({ type: "COST", payload: action.payload});
}

//Watcher Saga
function* watchAgeFilter() {
  yield takeEvery("AGE_FILTER", ageFilter);
}

function* watchCostFilter() {
  yield takeEvery("COST_FILTER", costFilter);
}

export default function* rootSaga() {
  yield all([watchAgeFilter(), watchCostFilter()]);
}
