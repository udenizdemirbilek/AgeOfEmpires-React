import unitsData from "../data/age-of-empires-units.json";

const initialState = {
  units: unitsData.units,
  ageFilterOutput: [],
  costFilterOutput: [],
  age: "all",
  wood: { checked: false, value: [0, 200] },
  food: { checked: false, value: [0, 200] },
  gold: { checked: false, value: [0, 200] },
};

export default function combinedFilter(state = initialState, action) {
  //CostFilter function to filter according to resource sliders
  function costFilter(resourceName, sliderValues) {
    return state.units.filter((unit) => {
      if (sliderValues[0] === 0 && unit.cost === null) {
        return true;
      } else
        return (
          unit.cost[resourceName] > sliderValues[0] &&
          unit.cost[resourceName] < sliderValues[1]
        );
    });
  }

  let woodCost,
    foodCost,
    goldCost = [];

  switch (action.type) {
    // Age Filter
    case "AGE": {
      switch (action.payload) {
        case "all":
          return { ...state, age: "all" , ageFilterOutput: state.units };
        case "dark":
          return {
            ...state,
            age: "dark",
            ageFilterOutput: state.units.filter((unit) => unit.age === "Dark"),
          };
        case "feudal":
          return {
            ...state,
            age: "feudal",
            ageFilterOutput: state.units.filter(
              (unit) => unit.age === "Feudal"
            ),
          };
        case "castle":
          return {
            ...state,
            age: "castle",
            ageFilterOutput: state.units.filter(
              (unit) => unit.age === "Castle"
            ),
          };
        case "imperial":
          return {
            ...state,
            age: "imperial",
            ageFilterOutput: state.units.filter(
              (unit) => unit.age === "Imperial"
            ),
          };
        default:
          return state;
      }
    }

    // Cost Filter
    case "COST": {
      switch (state.wood.checked) {
        case "wood": {
          switch (action.payload.checked) {
            case true: {
              woodCost = action.payload.value ? action.payload.value : [0, 200];
              return {
                ...state,
                costFilterOutput: costFilter("Wood", woodCost),
              };
            }
            default:
              return state;
          }
        }
        default:
          return state;
      }
    }

    default:
      return state;
  }
}
