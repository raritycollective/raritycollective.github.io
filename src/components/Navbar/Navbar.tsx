import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from "@mui/material/SvgIcon"
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Button, Icon } from "@mui/material";
import YelpIcon from "../../assets/svg/yelp.svg";

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
              sx={{ mr: 1 }}
              onClick={toggleSidebar(!sidebarState)}
            >
              <MenuIcon />
            </IconButton>
            <Button disabled sx={{ cursor: "none !important" }}></Button>
            <Button disabled sx={{ cursor: "none !important" }}></Button>
            <Typography 
              variant="h6" 
              sx={{ 
                flexGrow: 1 ,
                color: 'inherit',
                textDecoration: 'none',
                textAlign: "center",
                align: "center"
              }}>
              <Link to="/" style={{
                color: 'inherit',
                textDecoration: 'none',
                textAlign: "center",
              }}>
                raritycltv.
              </Link>
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              href="https://instagram.com/raritycollective_?igshid=MzRlODBiNWFlZA=="
              target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="medium"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              href="https://www.yelp.com/biz/rarity-collective-garden-grove-2"
              target="_blank">
              <Icon>
                <img src={YelpIcon} style={{
                  width: "90%"
                  }}/>
              </Icon>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              href="https://www.google.com/maps/place/Rarity+Collective/@33.7745655,-117.9887582,15z/data=!4m2!3m1!1s0x0:0xd6d3ff2084910a7a?sa=X&ved=2ahUKEwiSjeKRiZb_AhVDI0QIHeigD5QQ_BJ6BAhYEAg"
              target="_blank">
              <GoogleIcon />
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