// goes in src so every component can access it

import { createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },

    secondary: {
      main: blue[50],
      contrastText: blue[900],
    },
  },
});

export default theme;
