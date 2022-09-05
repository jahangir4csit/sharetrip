import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

export default function BookingSelect() {
  const [bookingPoint, setBookingPoint] = React.useState('');
  const [droppingPoint, setDroppingPoint] = React.useState('');

  const handleChange = (event) => {
    setBookingPoint(event.target.value);
    setDroppingPoint(event.target.value)
  };

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} className="booking_select_box">
        <Grid item xs={12} sm={6} md={6} >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Boarding Point</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bookingPoint}
                label="Boarding Point"
                onChange={handleChange}
                >
                <MenuItem value={10}>Kolabagan Counter</MenuItem>
                <MenuItem value={20}>Gabtoli</MenuItem>
                <MenuItem value={30}>Saydabad</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={6} >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Dropping Point</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={droppingPoint}
                label="Dropping Point"
                onChange={handleChange}
                >
                <MenuItem value={10}>Dampara Counter</MenuItem>
                <MenuItem value={20}>Mohakhali</MenuItem>
                <MenuItem value={30}>Airport</MenuItem>
                </Select>
            </FormControl>
        </Grid>

    </Grid>
  );
}
