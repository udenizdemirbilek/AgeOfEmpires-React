import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { InputGroup, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./RangeSlider.css";

function valuetext(value) {
  return `${value}`;
}

function RangeSlider({ label }) {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => state[label]);

  return (
    <Row>
      <Col className="checkbox">
        <InputGroup size="lg" className="mb-3">
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            onChange={(costFilter) => {
              dispatch({
                type: "COST",
                payload: {
                  costName: label,
                  checked: costFilter.target.checked,
                },
              });
            }}
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
              dispatch({
                type: "COST_FILTER",
                payload: { costName: label, value: costFilter.target.value },
              });
            }}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={200}
            min={0}
            disabled={!filterStatus.checked}
          />
        </Box>
      </Col>
      <Col>
        <h5>{`${filterStatus.value[0]} - ${filterStatus.value[1]}`}</h5>
      </Col>
      <Col />
      <Col />
    </Row>
  );
}

export default RangeSlider;
