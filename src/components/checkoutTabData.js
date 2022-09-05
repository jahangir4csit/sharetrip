import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';



import FinancialIcon from '../assets/icon/financial.png';
import CarIcon from '../assets/icon/car.png';

import styles from './utils/CheckoutTab.module.css'
import { Typography } from '@mui/material';
import BookingSelect from './utils/bookingSelect';
import SeatStats from './utils/seatStats';
import SeatInfo from './utils/seatInfoTab';
import SeatInfoFooter from './utils/seatInfoFooter';



export default function CheckoutTabData() {
    return(
        <Box>
            <Paper className={styles.tabInner}>
                <Grid container>
                    <Grid item xs={12} sm={8} md={9}>
                        <div className={styles.checkoutDetails}>
                            <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            className={styles.chkDetails_heading}
                            >
                                <Grid item sm={4} md={4} xs="auto">AC</Grid>
                                <Grid item className={styles.chkh_labelWrap} sm={4} md={4} xs="auto">
                                    <Chip label="Hanif Enterprize" color="secondary" className={styles.chkh_label} />
                                    <small>31-DHK-CTG(D)</small>
                                </Grid>
                                <Grid item sm={4} md={4} xs="auto">
                                    <Grid container direction="row" justifyContent="flex-end">
                                        <Grid item><img className={styles.financial_icon} width="22" src ={FinancialIcon} alt='financial' /></Grid>
                                        <Grid item>55</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            className={styles.chkDetails_trip}
                            >
                                <Grid item className={styles.chkDetails_tripInfo} >
                                    <Typography variant="caption" display="block" className={styles.caption}>
                                        From 
                                    </Typography>
                                    <Typography variant="button" display="block" className={styles.location}>
                                        Dhaka
                                    </Typography>
                                    <Typography variant="button" display="block" className={styles.time}>
                                        11:30 PM
                                    </Typography>
                                    <Typography variant="body2" className={styles.counter}>
                                        Kolabagan Counter
                                    </Typography>
                                    <Typography variant="caption" display="block"  className={styles.caption}>
                                        22 June 2021 
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <div className={styles.chkDetails_trip_car}>
                                        <img src={CarIcon} alt="car" />
                                    </div>
                                    <div className={styles.chkDetails_trip_statsInfo}>
                                        <Typography variant="body2">16 Seats available</Typography>
                                        <Typography variant="caption">6h 00m</Typography>
                                    </div>
                                </Grid>

                                <Grid item className={styles.chkDetails_tripInfo}>
                                    <Typography variant="caption" display="block" className={styles.caption}>
                                        To 
                                    </Typography>
                                    <Typography variant="button" display="block" className={styles.location}>
                                        Chottogram
                                    </Typography>
                                    <Typography variant="button" display="block" className={styles.time}>
                                        05:30 AM
                                    </Typography>
                                    <Typography variant="body2" className={styles.counter}>
                                        Dampara Counter
                                    </Typography>
                                    <Typography variant="caption" display="block"  className={styles.caption}>
                                        23 June 2021
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <div className={styles.seatPlan}>
                            <div className={styles.price_display_box}>
                                <Typography variant='caption'>
                                    Per Person
                                </Typography>
                                <Typography variant='h3'>
                                    BDT 750
                                </Typography>
                                <Typography variant='h4'>
                                    BDT 775
                                </Typography>
                                <Button variant="contained" className={styles.btnSeatView}>View seats</Button>
                                <Link href="#">Cancellation Policy</Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={8} md={9} className={styles.bookingPlanWrap}>
                        <BookingSelect />
                        <SeatStats />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <SeatInfo />
                        <SeatInfoFooter />
                    </Grid>
                </Grid>

            </Paper>
        </Box>
    )
}