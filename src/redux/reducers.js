import unitsData from "../data/age-of-empires-units.json";

const initialState = {
  units: unitsData.units,
  filterOutput: null,
  age: "All",
  wood: { checked: false, value: [0, 200] },
  food: { checked: false, value: [0, 200] },
  gold: { checked: false, value: [0, 200] },
};

export default function combinedFilter(state = initialState, action) {
  
  switch (action.type) {
    // Age Filter
    case "AGE": {
      return {
        ...state,
        age: action.payload,
      }
    }

    // Cost Filter
    case "COST": {
      if (action.payload.checked === true || action.payload.checked === false) {
        return {
          ...state,
          [action.payload.costName]: {checked: action.payload.checked, value: state[action.payload.costName].value}
        }
      } else if (action.payload.value) {
        return {
          ...state,
          [action.payload.costName]: {checked: state[action.payload.costName].checked, value: action.payload.value}
        }
      }
      break
    }

    case "SET_FILTERED":
      return {
        ...state,
        filterOutput: action.payload
      }

    default:
      return state;
  }
}
