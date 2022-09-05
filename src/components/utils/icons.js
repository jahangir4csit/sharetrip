import React from "react";
import soldIcon from '../../assets/icon/sold.png'
import bookedIcon from '../../assets/icon/booked.png'
import selected from '../../assets/icon/selected.png'
import available from '../../assets/icon/available.png'
import blocked from '../../assets/icon/blocked.png'
import seathorizontal from '../../assets/icon/seat_h.png'

export function SoldIcon(){
    return(
        <img src={soldIcon} alt='Sold icon' />
    )
}
export function BookedIcon(){
    return(
        <img src={bookedIcon} alt='Sold icon' />
    )
}
export function SelectedIcon(){
    return(
        <img src={selected} alt='Sold icon' />
    )
}
export function AvailableIcon(){
    return(
        <img src={available} alt='Sold icon' />
    )
}
export function BlockedIcon(){
    return(
        <img src={blocked} alt='Sold icon' />
    )
}
export function SeatHIcon(){
    return(
        <img src={seathorizontal} alt='Sold icon' />
    )
}