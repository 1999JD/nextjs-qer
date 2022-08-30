import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans TC'],
  },
  palette: {
    primary: {
      main: '#1a0b41',
    },
    secondary: {
      main: '#c59a50',
    },
  },
  ul: {
    listStyle: 'none'
  }
})

export default theme