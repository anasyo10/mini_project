import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./containers/Routes";
import AuthContextProvider from "./contexts/AuthContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
