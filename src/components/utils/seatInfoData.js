import * as React from 'react';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import styles from './SeatStats.module.css'
import { styled } from "@mui/material/styles";
import {SeatHIcon} from './icons'

const SeatItemIcon = styled(ListItemIcon)`
  min-width: auto;
  margin-right: 14px;
`;
const SeatInfoListItem = styled(ListItem)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 4px;
  padding-bottom: 4px;
`;
const SeatInfoItemText = styled(ListItemText)`
    display: flex;
    & p{
        padding-left: .75rem;
    }
`;
const CustomDivider = styled(Divider)`
    margin: 0.5rem 0;
`;

export default function SeatInfoData(){
    return(
        <div className="seat_info_data">
            <SeatInfoListItem>
                <SeatItemIcon>
                    <SeatHIcon />
                </SeatItemIcon>
                <SeatInfoItemText primary="B4" secondary="B-Class" className={styles.seatIconText} /><span className={styles.seatPrice}>BDT 750</span>
            </SeatInfoListItem>
            <SeatInfoListItem>
                <SeatItemIcon>
                    <SeatHIcon />
                </SeatItemIcon>
                <SeatInfoItemText primary="C4" secondary="B-Class" className={styles.seatIconText} /><span className={styles.seatPrice}>BDT 750</span>
            </SeatInfoListItem>
            <CustomDivider />
            <SeatInfoListItem>
                <SeatInfoItemText primary="Charge :" className={styles.seatIconText} /><span className={styles.seatPrice}>BDT 50</span>
            </SeatInfoListItem>
            <SeatInfoListItem>
                <SeatInfoItemText primary="Insurance :" className={styles.seatIconText} /><span className={styles.seatPrice}>BDT 20</span>
            </SeatInfoListItem>
            <CustomDivider />
            <SeatInfoListItem>
                <SeatInfoItemText primary="Sub Total :" className={styles.seatIconText} /><span className={styles.seatPrice}>BDT 1,570</span>
            </SeatInfoListItem>
        </div>
    )
}