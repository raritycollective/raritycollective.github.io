import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Box
        style={{
          backgroundColor: 'whitenpm'
        }}
        sx={{
          flexGrow: 1,
        }}>
        <Grid container direction={"column"} alignItems="center">
          <Grid item sx={{ height: "75%", width: "50%" }}>
            <img src="/images/rarity-white.png" style={{
              marginTop: 100,
              width: '100%'
            }}/>
          </Grid>
          <Grid item sx={{
            height: 100
          }}>
            <Button style={{
              color: "lightgrey",
            }}
            sx={{
              fontWeight: 100,
              bgcolor: '#202020',
              fontSize: 15,
              borderRadius: 0,
              borderColor: "#404040 !important",
              borderWidth: 1,
              "&:hover": {
                bgcolor: "white",
                color: 'black !important'
              }
            }}
            component={Link}
            to="/appointments"
            color="secondary"
            size="large"
            variant="outlined">Appointments</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}