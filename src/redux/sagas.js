import { put, all, select, takeLatest } from "redux-saga/effects";

function* filter(action) {
  const state = yield select();
  let filtered_units = state.units;

  //Cost Filter function that returns null costs if value[0] is 0
  function filterCost(resourceName) {
    const resource = resourceName.toLowerCase();
    return filtered_units.filter((unit) => {
      // Checks for null cost and undefined resource cost
      if (state[resource].value[0] === 0 && (unit.cost === null || unit.cost[resource] === undefined)) {
        return true;
      } else
        return (
          unit.cost &&
          unit.cost[resourceName] >= state[resource].value[0] &&
          unit.cost[resourceName] <= state[resource].value[1]
        );
    });
  }

  if (state.age !== "All") {
    filtered_units = filtered_units.filter((unit) => unit.age === state.age);
  }
  if (state.wood.checked) {
    filtered_units = filterCost("Wood");
  }
  if (state.food.checked) {
    filtered_units = filterCost("Food");
  }
  if (state.gold.checked) {
    filtered_units = filterCost("Gold");
  }
  yield put({ type: "SET_FILTERED", payload: filtered_units });
}

//Worker Saga
function* ageFilter(action) {
  yield put({ type: "AGE", payload: action.payload });
  yield put({ type: "FILTER" });
}

function* costFilter(action) {
  yield put({ type: "COST", payload: action.payload });
  yield put({ type: "FILTER" });
}

export default function* rootSaga() {
  yield all([
    yield takeLatest("AGE_FILTER", ageFilter),
    yield takeLatest("COST_FILTER", costFilter),
    yield takeLatest("FILTER", filter),
  ]);
}
