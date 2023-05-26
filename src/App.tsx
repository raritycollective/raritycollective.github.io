import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  RouterProvider,
  Link,
  Outlet
} from "react-router-dom";
import { router } from "./router/router";
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: "Serif"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          sx={{
            flexGrow: 1
          }}>
          <AppBar position="static" color="transparent">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography 
                variant="h6" 
                sx={{ 
                  flexGrow: 1 ,
                  color: 'inherit',
                  textDecoration: 'none'
                }} 
                href="/" component="a">
                raritycltv.
              </Typography>
              <Button color="inherit" disabled></Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Box
          sx={{
            flexGrow: 1
          }}>
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
