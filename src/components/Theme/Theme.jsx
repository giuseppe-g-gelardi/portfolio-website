import { createTheme } from '@material-ui/core'

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  props: {
    MuiAppBar: {
      color: 'primary',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#c792ea',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  props: {
    MuiAppBar: {
      color: 'primary',
    },
  },
})

// const lightTheme = createTheme({
//   palette: {
//     type: 'light',
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   },
// })

// const darkTheme = createTheme({
//   palette: {
//     type: 'dark',
//   },
//   typography: {
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//   },
// })

export { lightTheme, darkTheme }






