import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import '@fontsource/pirata-one';

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
        <Stack direction="column" sx={{ alignItems: "center" }}>
          <Box sx={{ width: { xs: "90%", sm: "70%", md: "50%" }, mt: 12, textAlign: "center" }}>
            <svg viewBox="0 0 700 320" style={{ width: "100%", height: "auto", display: "block", marginBottom: "-30%" }}>
              <defs>
                <path id="rarity-arc" d="M 20 300 Q 350 -100 680 300" fill="none" />
              </defs>
              <text fontFamily="'Pirata One', serif" fontSize="110" fill="black">
                <textPath href="#rarity-arc" startOffset="50%" textAnchor="middle">
                  RARITY
                </textPath>
              </text>
            </svg>
            <Typography sx={{
              fontFamily: "'Pirata One', serif",
              fontSize: { xs: 28, sm: 36, md: 44 },
              letterSpacing: 6,
              position: "relative",
              zIndex: 1
            }}>
              COLLECTIVE
            </Typography>
          </Box>
          <Box sx={{
            height: 100,
            mt: 4
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
          </Box>
        </Stack>
      </Box>
    </>
  )
}
