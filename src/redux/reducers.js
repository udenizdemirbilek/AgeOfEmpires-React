import initialState from "../data/age-of-empires-units.json";

export default function ageFilter(state = initialState, action) {
//filter state according to action.payload (action.payload is the age) 

switch (action.payload) {
    case "All":
      return {...state, displayUnits: state.units};
    case "Dark": 
      return {...state, displayUnits: state.units.filter(unit => unit.age === "Dark")};
    case "Feudal":
      return {...state, displayUnits: state.units.filter(unit => unit.age === "Feudal")};
    case "Castle":
      return {...state, displayUnits: state.units.filter(unit => unit.age === "Castle")};
    case "Imperial":
      return {...state, displayUnits: state.units.filter(unit => unit.age === "Imperial")};
    default:
      return state;
  }
}