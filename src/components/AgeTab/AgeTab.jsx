import React, {useState} from "react";
import { Tabs, Tab } from "react-bootstrap";
import { call, put } from "redux-saga/effects";

function ControlledTabs() {
    const [key, setKey] = useState('All');

    function* ageSaga() {
        yield put({type: "AGE", payload: key});
    }
  //need to dispatch the action
    return (
      <Tabs
        id="age-selector"
        onSelect={(k) => {
          setKey(k)
          ageSaga(k);
        }}
        className="mb-3"
      >
        <Tab eventKey="All" title="All">
        </Tab>
        <Tab eventKey="Dark" title="Dark">
        </Tab>
        <Tab eventKey="Feudal" title="Feudal">
        </Tab>
        <Tab eventKey="Castle" title="Castle">
        </Tab>
        <Tab eventKey="Imperial" title="Imperial">
        </Tab>
      </Tabs>
    );
  }
  
  export default ControlledTabs;