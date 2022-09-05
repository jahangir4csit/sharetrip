import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import SeatInfoData from './seatInfoData';


import { styled } from "@mui/material/styles";

const SeatInfoWrap = styled(Box)`
  padding: 1.25rem 1rem 0.75rem 1rem; 
`;

const TabBar = styled(AppBar)`
    background-color: #FFFFFF;
    color: #8E8E93;
    border-radius: 3px;
    & .MuiTabs-root{
      min-height: 2.5rem;
    }
    & button.Mui-selected{
        background-color: #1882FF;
        color: #fff;
        border-radius: 3px!important;
    }
    & button.MuiButtonBase-root{
        font-family: 'sf-pro-medium';
        border: 1px solid #C7C7CC;
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 500;
        opacity: 1;
        letter-spacing: normal;
        min-height: 2.5rem;
        border-radius: 0px 3px 3px 0px;
        height: 36px;
        padding: 8px 20px;
    }
`;




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function SeatInfo() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <SeatInfoWrap>
      <TabBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="SEAT INFO" {...a11yProps(0)} />
          <Tab label="POLICY" {...a11yProps(1)} />
        </Tabs>
      </TabBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SeatInfoData />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          POLICY
        </TabPanel>
      </SwipeableViews>
    </SeatInfoWrap>
  );
}
