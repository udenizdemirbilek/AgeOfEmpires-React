import React from "react";
import data from "../../data/age-of-empires-units.json";
import Table from "react-bootstrap/Table";
import UnitRow from "../../components/UnitRow/UnitRow";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import AgeTab from "../../components/AgeTab/AgeTab";

function Units() {
  console.log(data);
  const units = data.units;

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
          <RangeSlider />
          <RangeSlider />
          <RangeSlider />
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
              <UnitRow key={unit.id} id={unit.id} name={unit.name} age={unit.age} cost={unit.cost}/>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Units;
