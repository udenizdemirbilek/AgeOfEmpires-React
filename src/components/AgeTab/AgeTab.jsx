import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function ControlledTabs() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);

  return (
    <Tabs
      id="age-selector"
      activeKey={age}
      onSelect={(selectedAge) => {
        dispatch({ type: "AGE_FILTER", payload: selectedAge });
      }}
      className="mb-3"
    >
      <Tab eventKey="All" title="All"></Tab>
      <Tab eventKey="Dark" title="Dark"></Tab>
      <Tab eventKey="Feudal" title="Feudal"></Tab>
      <Tab eventKey="Castle" title="Castle"></Tab>
      <Tab eventKey="Imperial" title="Imperial"></Tab>
    </Tabs>
  );
}

export default ControlledTabs;
