import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

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