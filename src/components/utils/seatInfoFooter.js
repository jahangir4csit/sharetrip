import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';


import { styled } from "@mui/material/styles";

const SformGroup = styled(FormGroup)`
    display: flow-root;
    & .MuiFormControlLabel-root{
        margin-left: 0;
        margin-right: 4px;
        & .MuiButtonBase-root{
            padding-left: 0;
        }
        & .MuiFormControlLabel-label{
            font-family: 'sf-pro-regular';
            font-size: 0.875rem;
            font-weight: 400;
            color: #4C4C4C;
        }
    }
    & a{
        text-decoration: none;
        font-family: 'sf-pro-medium';
        font-size: 0.875rem;
        font-weight: 500;
        color: '#1882FF';
    }
`;
const BtnBooked = styled(Button)`
    font-family: 'sf-pro-medium';
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    background: #1882FF;
    border-radius: 3px;
    height: 36px;
    box-shadow: none;
    padding: 8px 16px;
    letter-spacing: normal
`;

export default function SeatInfoFooter(){
    return(
        <div className="seatinfofooter">
                <SformGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I want to avail" /><Link href="#">Insurance Service</Link>
                </SformGroup>
                <BtnBooked variant="contained">Select &amp; Continue to return</BtnBooked>
        </div>
    )
}