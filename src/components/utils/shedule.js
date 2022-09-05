import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { styled } from "@mui/material/styles";

const ScheduleItem = styled(Chip)`
  border: 1px solid #F3F3F6;
  border-radius: 3px;
  font-family: 'sf-pro-medium';
  height: 2.75rem;
  font-weight: 500;
  font-size: 1rem;
  justify-content: flex-start;
  & .MuiAvatar-root{
    border-radius: 0;
    margin: 10px 8px;
    background-color: #C4C4C4;
  }
  & .MuiChip-label{
    line-height: 2.75rem;
    padding-left: 0;
  }
  :hover {
    color: #3884F7;
  }
`;

export default function Schedule() {
  return (
    <Stack 
    direction="column" 
    spacing={1}
    >
      <ScheduleItem variant="outlined" avatar={<Avatar>&nbsp;</Avatar>} label="00:00 - 05:59" />
      <ScheduleItem variant="outlined" avatar={<Avatar>&nbsp;</Avatar>} label="06:00 - 11:59" />
      <ScheduleItem variant="outlined" avatar={<Avatar>&nbsp;</Avatar>} label="12:00 - 17:59" />
      <ScheduleItem variant="outlined" avatar={<Avatar>&nbsp;</Avatar>} label="18:00 - 23:59" />
    </Stack>
  );
}
