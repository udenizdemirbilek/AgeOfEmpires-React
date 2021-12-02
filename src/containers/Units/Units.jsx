import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import UnitRow from "../../components/UnitRow/UnitRow";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import AgeTab from "../../components/AgeTab/AgeTab";
import "./Units.css";

function Units() {
  // Display units in inital state at the start of the app, then display selected units according to the age and cost range
  const units = useSelector((state) => {
    if (state.ageFilterOutput.length === 0) {
      return state.units;
    } else {
        if (state.costFilterOutput.length === 0) {
          return state.ageFilterOutput;
        }
        else {
          return state.costFilterOutput;
        }
    }
  });

  return (
    <div className="units">
      <h1>Units Page</h1>
      <div className="units-container">
        <div className="ages">
          <h3>Ages</h3>
          <AgeTab />
        </div>
        <div className="costs">
          <h3>Costs</h3>
          <RangeSlider label="wood" />
          <RangeSlider label="food" />
          <RangeSlider label="gold" />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Costs</th>
            </tr>
          </thead>
          <tbody className="units-table">
            {units.map((unit) => (
              <UnitRow
                key={unit.id}
                id={unit.id}
                name={unit.name}
                age={unit.age}
                cost={unit.cost}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Units;
