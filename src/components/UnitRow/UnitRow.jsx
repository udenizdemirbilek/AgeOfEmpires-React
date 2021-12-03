import React from "react";
import { Link } from "react-router-dom";

function UnitRow({ id, name, age, cost }) {
  // Logic for displaying different kinds of costs in one string
  let unitCost = [];
  switch (cost) {
    case null:
      unitCost = "No Cost";
      break;
    default: {
      switch (cost.Wood) {
        case undefined:
          break;
        default:
          unitCost.push("Wood: " + cost.Wood);
      }
      switch (cost.Food) {
        case undefined:
          break;
        case null:
          break;
        default:
          unitCost.push("Food: " + cost.Food);
      }
      switch (cost.Gold) {
        case undefined:
          break;
        default:
          unitCost.push("Gold: " + cost.Gold);
      }
    }
  }

  const unitCostString =
    unitCost === "No Cost" ? "No Cost" : unitCost.join(", ");

  return (
    <tr>
      <td>{id}</td>
      <td>
        <Link to={`/details/${id}`}>{name} </Link>
      </td>
      <td>{age}</td>
      <td>{unitCostString}</td>
    </tr>
  );
}

export default UnitRow;
