import React, {useState} from "react";
import { Tabs, Tab } from "react-bootstrap";


function ControlledTabs() {
    const [key, setKey] = useState('all');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
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