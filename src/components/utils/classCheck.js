import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { styled } from "@mui/material/styles";

const ClassItemIcon = styled(ListItemIcon)`
  min-width: auto;
`;
const ClassItemText = styled(ListItemText)`
  color: #000;
  & span{
    font-size: 1rem;
    font-family: 'sf-pro-regular';
    font-weight: 400;
  }
`;

export default function ClassCheck() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[{class: 'AC', num: 40}, {class: 'Non AC', num: 24}].map((data, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={index}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
              <ClassItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(index) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ClassItemIcon>
              <ClassItemText id={labelId} primary={`${data.class} (${data.num})`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
