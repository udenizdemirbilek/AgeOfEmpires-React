import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ControlledTabs() {
    const dispatch = useDispatch();
    const age = useSelector(state => state.age);

    return (
      <Tabs
        id="age-selector"
        activeKey={age}
        onSelect={(selectedAge) => {
          dispatch({type: "AGE", payload: selectedAge});
        }}
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
        </Tab>
        <Tab eventKey="dark" title="Dark">
        </Tab>
        <Tab eventKey="feudal" title="Feudal">
        </Tab>
        <Tab eventKey="castle" title="Castle">
        </Tab>
        <Tab eventKey="imperial" title="Imperial">
        </Tab>
      </Tabs>
    );
  }
  
  export default ControlledTabs;