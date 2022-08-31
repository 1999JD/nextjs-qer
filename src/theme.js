import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      pale: '#52556B',
      light: '#464F66',
      main: '#1a0b41',
    },
    secondary: {
      main: '#7A6E5C',
      light: '#9A8B75'
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
    },
  },
})


export default theme