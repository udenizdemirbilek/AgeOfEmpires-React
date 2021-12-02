import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { InputGroup, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./RangeSlider.css";

function valuetext(value) {
  return `${value}`;
}
//implement redux saga to get the data from the reducer and update the state for slider and checkbox (labels)
//payload is going to be an object {name, value, checked}

function RangeSlider({label}) {
  const dispatch = useDispatch();
  const filterStatus = useSelector(state => state[label]);
  console.log(filterStatus);
  const [value, setValue] = React.useState([0, 200]);
  const [check, setCheck] = React.useState(false);

  const handleChange = (event, newValue) => {
    console.log(event)
    setValue(newValue);
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
    console.log(event.target.name, event.target.checked);
  };

  return (
    <Row >
      <Col className="checkbox">
        <InputGroup size="lg" className="mb-3">
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            // onChange={handleCheck}
            onChange = {(costFilter) => {
              dispatch({type: "COST", payload: {costName: costFilter.target.name, checked: costFilter.target.checked}});
            }}
            name={label}
            value={filterStatus.checked}
          />
          <InputGroup.Text>{label}</InputGroup.Text>
        </InputGroup>
      </Col>
      <Col>
        <Box sx={{ width: 400 }} className="sliderBox">
          <Slider
            getAriaLabel={() => "Resource Cost"}
            value={filterStatus.value}
            onChange={(costFilter) => {
              dispatch({type: "COST", payload: {costName: costFilter.target.name, value: costFilter.target.value}});
            }}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={200}
            min={0}
          />
        </Box>
      </Col>
      <Col>
        <h5>{`${value[0]} - ${value[1]}`}</h5>
      </Col>
      <Col/>
      <Col/>
    </Row>
  );
}

export default RangeSlider;
