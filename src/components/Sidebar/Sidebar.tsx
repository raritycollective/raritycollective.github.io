import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Divider, Grid, Icon, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from "@mui/material/SvgIcon"
import GoogleIcon from "@mui/icons-material/Google";
import YelpIcon from "../../assets/svg/yelp.svg";

export interface SidebarProps {
  open: boolean;
  toggle: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const Sidebar = ({
  open = false,
  toggle
}: SidebarProps) => {
  const listItems = [
    {
      label: "Appointments",
      link: "/appointments"
    },
    {
      label: "Contact",
      link: "/contact"
    }
  ]
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggle(false)}
      onKeyDown={toggle(false)}
    >
      <List>
        {listItems.map((item, index) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <Divider sx={{ display: { xs: "flex", sm: "none" }}}/>

        <ListItem alignItems="center" sx={{
          justifyContent: "space-evenly",
          display: { xs: "flex", sm: "none" }
        }}>
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
              size="large"
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
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={toggle(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}