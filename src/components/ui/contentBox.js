import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const ContentBox = styled(Paper)(({ theme }) => ({
    color: theme.palette.text.secondary,
    border: '1px solid #F6F6F6',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '6px'
  }));