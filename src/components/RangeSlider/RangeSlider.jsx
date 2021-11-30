import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { InputGroup } from "react-bootstrap";

function valuetext(value) {
  return `${value}`;
}
//implement redux saga to get the data from the server and update the state for slider and checkbox (labels)

function RangeSlider() {
  const [value, setValue] = React.useState([0, 200]);
  const [check, setCheck] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
    console.log(check);
  };

  return (
    <Box sx={{ width: 400 }}>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleCheck}/>
        <InputGroup.Text>Placeholder</InputGroup.Text>
      </InputGroup>
      <Slider
        getAriaLabel={() => "Resource Cost"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={200}
        min={0}
      />
      <h5>{`${value[0]} - ${value[1]}`}</h5>
    </Box>
  );
}

export default RangeSlider;