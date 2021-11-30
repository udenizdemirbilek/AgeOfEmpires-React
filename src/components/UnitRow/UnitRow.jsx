import React from "react";

//Need to write logic for displaying all kinds of resources for unit cost

function UnitRow({id, name, age}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            {/* <td>{props.unit.cost}</td> */}
        </tr>
    );
    }

    export default UnitRow;