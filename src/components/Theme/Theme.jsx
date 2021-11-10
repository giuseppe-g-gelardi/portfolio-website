import React  from 'react'
import { createTheme } from '@material-ui/core'


const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

export { lightTheme, darkTheme }

