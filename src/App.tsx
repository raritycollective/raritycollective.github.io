import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Outlet
} from "react-router-dom";
import Grid from "@mui/material/Grid";
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

const theme = createTheme({
  typography: {
    fontFamily: "Serif"
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />

        <Box
          sx={{
            flexGrow: 1
          }}>
          <Outlet />
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            flexGrow: 1
          }}>
          <Grid 
            container 
            direction="column"
            justifyContent="center">
            <Grid 
              item
              sx={{
                p: 5
              }}>
              <Typography>
                Copyright © {new Date().getFullYear()}, Rarity Collective | All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
