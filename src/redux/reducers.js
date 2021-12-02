import initialState from "../data/age-of-empires-units.json";

export default function combinedFilter(state = initialState, action) {
  //CostFilter function to filter according to resource sliders
  function costFilter (resourceName, sliderValues) {
    return state.units.filter(unit => 
    //   {
    //   if (unit.cost === null ) {
        
    //   }
    // }
      unit.cost !== null && unit.cost[resourceName] > sliderValues[0] && unit.cost[resourceName] < sliderValues[1]
      )
  }
  
  let woodCost, foodCost, goldCost = []

  switch (action.type) {
    // Age Filter
    case "AGE": {
      switch (action.payload) {
        case "All":
          return {...state, ageFilterOutput: state.units};
        case "Dark": 
          return {...state, ageFilterOutput: state.units.filter(unit => unit.age === "Dark")};
        case "Feudal":
          return {...state, ageFilterOutput: state.units.filter(unit => unit.age === "Feudal")};
        case "Castle":
          return {...state, ageFilterOutput: state.units.filter(unit => unit.age === "Castle")};
        case "Imperial":
          return {...state, ageFilterOutput: state.units.filter(unit => unit.age === "Imperial")};
        default:
          return state;
      }
    }
      
    // Cost Filter
    case "COST": {
      switch (action.payload.costName) {
        case "Wood": {
          switch (action.payload.checked) {
            case true : {
              woodCost = action.payload.value ? action.payload.value : [0,200]
              return {...state, costFilterOutput: costFilter ('Wood', woodCost)};
            }
            default:
              return state
            }
        }
        default: 
          return state;
      }
    }

  default:
    return state;
}}