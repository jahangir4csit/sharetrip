import * as React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './SeatStats.module.css'
import { styled } from "@mui/material/styles";
import {SoldIcon, BookedIcon, SelectedIcon, AvailableIcon, BlockedIcon} from './icons'

const SeatItemIcon = styled(ListItemIcon)`
  min-width: auto;
`;

export default function SeatStats() {
    return(
        <Grid 
        container 
        alignItems="center"
         className={styles.seatStatsWrap}>
            <Grid item xs>
                <ListItem>
                    <SeatItemIcon sx={{ mr: 1}}>
                        <SoldIcon />
                    </SeatItemIcon>
                    <ListItemText primary="3 Sold Out" className={styles.seatIconText} />
                </ListItem>
            </Grid>
            <Grid item xs>
                <ListItem>
                    <SeatItemIcon sx={{ mr: 1}}>
                        <BookedIcon />
                    </SeatItemIcon>
                    <ListItemText primary="2 Booked" className={styles.seatIconText} />
                </ListItem>
            </Grid>
            <Grid item xs>
                <ListItem>
                    <SeatItemIcon sx={{ mr: 1}}>
                        <SelectedIcon />
                    </SeatItemIcon>
                    <ListItemText primary="2 Selected" className={styles.seatIconText} />
                </ListItem>
            </Grid>
            <Grid item xs>
                <ListItem>
                    <SeatItemIcon sx={{ mr: 1}}>
                        <AvailableIcon />
                    </SeatItemIcon>
                    <ListItemText primary="14 Available" className={styles.seatIconText} />
                </ListItem>
            </Grid>
            <Grid item xs>
                <ListItem>
                    <SeatItemIcon sx={{ mr: 1}}>
                        <BlockedIcon />
                    </SeatItemIcon>
                    <ListItemText primary="20 Blocked" className={styles.seatIconText} />
                </ListItem>
            </Grid>
        </Grid>
    )
}