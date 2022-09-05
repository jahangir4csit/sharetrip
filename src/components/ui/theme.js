import { createTheme, Link, SliderThumb } from '@mui/material';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export default createTheme({
    palette: {
        primary: {
          main: '#3884F7',
        },
        secondary: {
          main: '#BBDDFF',
        },
      },
    components: {
        MuiAppBar:{
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(56, 132, 247, 0.16)',
                    boxShadow: 'none',
                    paddingLeft: 0,
                    paddingRight: 0
                }
            }
        },
        MuiToolbar:{
            styleOverrides:{
                root:{
                    [theme.breakpoints.up('sm')]:{
                        minHeight: '6rem',
                        paddingLeft: 0,
                        paddingRight: 0
                    }
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    fontFamily: 'sf-pro-regular!important'
                }
            }
        },
        MuiSlider:{
            styleOverrides:{
                root:{
                    width: '97.2%',
                    marginLeft: '8px',
                    marginRight: '8px'
                },
                thumb:{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#3884F7'
                },
                track:{
                    height: '2px',
                    backgroundColor: '#3884F7'
                }
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    letterSpacing: 'normal'
                }
            }
        }
         
    }
  });