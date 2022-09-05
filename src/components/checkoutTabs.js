import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CheckoutTabData from './checkoutTabData'

import IconTab1 from '../assets/icon/icontab1.png';
import IconTab2 from '../assets/icon/icontab2.png';
import IconTab3 from '../assets/icon/icontab3.png';

import { styled } from "@mui/material/styles";
import { Paper } from '@mui/material';

const TabBar = styled(AppBar)`
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid #F6F6F6;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 3px;
    & .MuiTabs-root{
      min-height: 2.5rem;
    }
    & button.Mui-selected{
        background-color: #3884F7;
        color: #fff;
    }
    & button.MuiButtonBase-root{
        text-transform: capitalize;
        font-size: 0.875rem;
        font-weight: 400;
        font-family: 'sf-pro-regular';
        opacity: 1;
        letter-spacing: normal;
        min-height: 2.5rem;
        justify-content: flex-start;
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

export default function CheckoutTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <TabBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor=""
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab icon={<img src={IconTab1} alt='icon' />} iconPosition="start" label="Earliest Buses" {...a11yProps(0)} />
          <Tab icon={<img src={IconTab2} alt='icon' />} iconPosition="start" label="Cheapest Buses" {...a11yProps(1)} />
          <Tab icon={<img src={IconTab3} alt='icon' />} iconPosition="start" label="Available Seats" {...a11yProps(2)} />
          <Tab icon={<img src={IconTab3} alt='icon' />} iconPosition="start" label="Fastest Trips" {...a11yProps(3)} />
        </Tabs>
      </TabBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          Coming Soon
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CheckoutTabData />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Coming Soon
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Coming Soon
        </TabPanel>
    </Box>
  );
}
