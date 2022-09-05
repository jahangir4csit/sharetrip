import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import RangeSlider from '../utils/rangeSlider';
import ClassCheck from '../utils/classCheck'

import Schedule from '../utils/shedule'
import CheckoutTabs from '../checkoutTabs';
import {ContentBox} from '../ui/contentBox'

import styles from './Content.module.css'




export default function Content(props) {
    return(
        <Container maxWidth="xl" className={styles.contentWrap}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <ContentBox>
                            <div className={styles.sidebar}>
                                <Grid
                                container
                                direction="row"
                                className={styles.sidebarHeader}
                                justifyContent="space-between"
                                alignItems="center">
                                    <Grid item>
                                        <span>Sort &amp; Filter</span>
                                    </Grid>
                                    <Grid item>
                                        <Button>RESET</Button>
                                    </Grid>
                                </Grid>
                                <Divider />

                                {/* sidebar widget item */}
                                <div className={styles.sidebarWidget}>
                                    <h3>Price Range</h3>
                                    <Grid
                                    container
                                    direction="row"
                                    className={styles.filterInfo}
                                    justifyContent="space-between"
                                    alignItems="center">
                                        <Grid item>
                                            <span>Minimum Price<b>500</b></span>
                                        </Grid>
                                        <Grid item>
                                            <span>Maximum Price<b>3,213</b></span>
                                        </Grid>
                                    </Grid>
                                    <div className={styles.filterWrap} >
                                        <RangeSlider />
                                    </div>
                                </div>
                                {/* end sidebar widget item */}

                                {/* sidebar widget item */}
                                <div className={styles.sidebarWidget}>
                                    <h3>Class</h3>
                                    <ClassCheck />
                                </div>
                                {/* end sidebar widget item */}

                                {/* sidebar widget item */}
                                <div className={styles.sidebarWidget}>
                                    <h3>Schedule</h3>
                                    <div className={styles.sWidgetContent}>
                                        <h4>Departure Time</h4>
                                        <Schedule />
                                    </div>
                                </div>
                                {/* end sidebar widget item */}

                            </div>
                        </ContentBox>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <div className='mainContentWrap'>
                            <h3 className='filter_status_heading'>48 Available Buses</h3>
                            <CheckoutTabs />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}