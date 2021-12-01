import React from "react";
import { useParams } from "react-router";
import { Table } from "react-bootstrap";

//Write a component DetailRow that renders a row in the Details table.
//implement redux saga to get the data from the server and update the state for DetailRow with map

function Details() {
    let { unitId } = useParams();

  return (
    <div>
      <h1>Unit Detail Page</h1>
      <Table striped bordered hover className="detailsTable">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{unitId}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td></td>
          </tr>
          <tr>
            <td>Description</td>
            <td></td>
          </tr>
          <tr>
            <td>Min. Required Age:</td>
            <td></td>
          </tr>
          <tr>
            <td>Wood Cost:</td>
            <td></td>
          </tr>
          <tr>
            <td>Food Cost:</td>
            <td></td>
          </tr>
          <tr>
            <td>Gold Cost:</td>
            <td></td>
          </tr>
          <tr>
            <td>Build Time:</td>
            <td></td>
          </tr>
          <tr>
            <td>Reload Time:</td>
            <td></td>
          </tr>
          <tr>
            <td>Hit Points:</td>
            <td></td>
          </tr>
          <tr>
            <td>Attack:</td>
            <td></td>
          </tr>
          <tr>
            <td>Accuracy:</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Details;
