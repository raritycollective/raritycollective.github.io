import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Navbar = () => {
  const [sidebarState, setSidebarState] = useState(false);

  const toggleSidebar =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log(open)
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      console.log(open)
      setSidebarState(open);
    };

  return (
    <>
      <Box sx={{
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
              onClick={toggleSidebar(!sidebarState)}
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
              component={Link}
              to="">
              raritycltv.
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="https://instagram.com/raritycollective_?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Sidebar
        open={sidebarState}
        toggle={toggleSidebar} />
    </>
  )
}