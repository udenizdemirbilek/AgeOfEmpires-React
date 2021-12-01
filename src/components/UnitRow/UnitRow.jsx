import React from "react";
import { Link } from "react-router-dom";

//Activate links to details page
//Rewrite logic and try to get rid of the extra commas on skirmisher, spearman

function UnitRow({ id, name, age, cost }) {
  // Logic for displaying different kinds of costs in one string
  let unitCost = "";
  switch (cost) {
    case null:
      unitCost = "No Cost";
      break;
    default: {
      switch (cost.Wood) {
        case undefined:
          break;
        default:
          unitCost += "Wood: " + cost.Wood + ", ";
      }
      switch (cost.Food) {
        case undefined:
          break;
        case null:
          break;
        default:
          unitCost += "Food: " + cost.Food + ", ";
      }
      switch (cost.Gold) {
        case undefined:
          break;
        default:
          unitCost += "Gold: " + cost.Gold + " ";
      }
    }
  }

  return (
    <tr>
      {/* <Link to={`/details/${id}`}> */}
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{unitCost}</td>
      {/* </Link> */}
    </tr>
  );
}

export default UnitRow;
