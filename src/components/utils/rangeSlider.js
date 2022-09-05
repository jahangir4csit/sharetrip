import * as React from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([500, 3213]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={500}
        step={1}
        max={3213}
      />
  );
}
