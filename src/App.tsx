import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Outlet
} from "react-router-dom";
import Stack from "@mui/material/Stack";
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
          <Stack
            direction="column"
            sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                p: 5
              }}>
              <Typography>
                Copyright © {new Date().getFullYear()}, Rarity Collective | All Rights Reserved
              </Typography>
            </Box>
          </Stack>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
