import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Table } from "react-bootstrap";
import "./Details.css";

function Details() {
    const { unitId } = useParams();
    const unit = useSelector(state => state.units.find(unit => unit.id === parseInt(unitId))) || {};
    const unitCost = unit.cost ? unit.cost : "No Cost";

  return (
    <div>
      <h1>Unit Detail Page</h1>
      <Table striped bordered hover className="detailsTable">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{unit.id ? unit.id : "No ID"}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{unit.name ? unit.name : "No Name"}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{unit.description ? unit.description : "No Description"}</td>
          </tr>
          <tr>
            <td>Min. Required Age:</td>
            <td>{unit.age ? unit.age : "No Age"}</td>
          </tr>
          <tr>
            <td>Wood Cost:</td>
            <td>{unitCost.Wood ? unit.cost.Wood : "No Cost"}</td>
          </tr>
          <tr>
            <td>Food Cost:</td>
            <td>{unitCost.Food ? unit.cost.Food : "No Cost"}</td>
          </tr>
          <tr>
            <td>Gold Cost:</td>
            <td>{unitCost.Gold ? unit.cost.Gold : "No Cost"}</td>
          </tr>
          <tr>
            <td>Build Time:</td>
            <td>{unit.build_time ? unit.build_time : "Not Applicable"}</td>
          </tr>
          <tr>
            <td>Reload Time:</td>
            <td>{unit.reload_time ? unit.reload_time : "Not Applicable"}</td>
          </tr>
          <tr>
            <td>Hit Points:</td>
            <td>{unit.hit_points ? unit.hit_points : "No HP"}</td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td>{unit.attack ? unit.attack : "Not Applicable"}</td>
          </tr>
          <tr>
            <td>Accuracy:</td>
            <td>{unit.accuracy ? unit.accuracy : "Not Applicable"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Details;
