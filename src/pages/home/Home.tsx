import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const Home = () => {
  return (
    <>
      <Box
        style={{
          backgroundColor: 'black'
        }}
        sx={{
          flexGrow: 1,
        }}>
        <Grid container direction={"column"}>
          <Grid item sx={{ height: "75vh" }}>
            <img src="/images/rarity-quality-transparent.png" style={{
              width: '100vh'
            }}/>
          </Grid>
          <Grid item>
            <Button style={{
              position: "relative",
              top: -80,
              color: "lightgrey",
            }}
            sx={{
              fontWeight: 100,
              bgcolor: 'black',
              fontSize: 15,
              borderRadius: 0,
              "&:hover": {
                bgcolor: "white",
                color: 'black !important'
              }
            }}
            color="secondary"
            size="large"
            variant="contained"
            href="/appointments">Appointments</Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          flexGrow: 1
        }}>
        <Grid 
          container 
          direction="row"
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
    </>
  )
}