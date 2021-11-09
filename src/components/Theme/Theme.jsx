import React, { useState } from 'react'
import { createTheme } from '@material-ui/core'


const theme = createTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

export default theme

// export default function SetTheme() {

//   const [darkMode, setDarkMode] = useState(false)


//   const theme = createTheme({
//     palette: {
//       type: darkMode ?  'dark' : 'light'
//     },
//     typography: {
//       fontFamily: 'Quicksand',
//       fontWeightLight: 400,
//       fontWeightRegular: 500,
//       fontWeightMedium: 600,
//       fontWeightBold: 700,
//     },
//   })

// }


// const theme = createTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   },
//   props: {
//     MuiAppBar: {
//       color: 'secondary',
//     },
//   },
// })

