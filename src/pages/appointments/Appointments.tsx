import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import InstagramIcon from '@mui/icons-material/Instagram';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { BarberPoleStripe } from "../../components/BarberPoleStripe/BarberPoleStripe";

export const Appointments = () => {
  const barbers = [
    {
      name: "James",
      links: {
        booking: "http://book.thecut.co/JamesM",
        instagram: "https://www.instagram.com/jamesmichel_/",
        image: "/images/james.png"
      }
    },
    {
      name: "Anthony",
      links: {
        booking: "http://raritycollective.booksy.com",
        instagram: "https://www.instagram.com/Fcknbubba/",
        image: "/images/anthony.jpeg"
      }
    },
    {
      name: "Javier",
      links: {
        booking: "https://javyroblesluna.booksy.com/",
        instagram: "https://www.instagram.com/Javyroblesluna/",
        image: "/images/javier.jpeg"
      }
    },
    {
      name: "Ari",
      links: {
        booking: "https://getsquire.com/booking/book/rarity-collective-garden-grove/barber/ari-calderon-1/services",
        instagram: "https://instagram.com/thefadepanda",
        image: "/images/ari.jpeg"
      }
    },
  ]

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10
        }}
        style={{
          background: "url(/images/shop.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center fixed",
          backgroundAttachment: "fixed"
        }}>
        <Stack
          direction="column">
          <Box sx={{
            p: 5
          }}>
            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontSize: {
                  lg: 60,
                  md: 40,
                  sm: 30,
                  xs: 30
                }
              }}>
              <ContentCutIcon
                sx={{
                  fontSize: "0.7em",
                  mr: 1.5,
                  mb: 0.5,
                  transform: "rotate(-90deg)",
                  verticalAlign: "middle"
                }}
              />
              appntmnts.
            </Typography>
            <Typography
              variant="body1">
              <b>In addition to cash, we accept other forms of payment such as Zelle and Apple Pay</b>
            </Typography>
          </Box>
          <Grid container direction="row" sx={{ justifyContent: "space-evenly" }} rowSpacing={2} columnSpacing={2}>
            {barbers.map((barber, index) => (
              <Grid key={index} size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
                <Card sx={{
                  width: "100%",
                  bgcolor: "black",
                  color: "white",
                  }}>
                  <BarberPoleStripe height={5} />
                  <CardHeader
                    title={barber.name}
                  />
                  <CardMedia
                    component="img"
                    height={450}
                    width="100%"
                    image={barber.links.image}
                    alt="barber"
                  />
                  <CardContent>
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
                          color: 'black !important',
                        }
                      }}
                      href={barber.links.booking}
                      target="_blank"
                      color="secondary"
                      size="large"
                      variant="outlined">Book your appointment</Button>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      href={barber.links.instagram}
                      target="_blank"
                      sx={{
                        color: "white"
                      }}>
                      <InstagramIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10
        }}>
        <Stack
          direction="column">

          <Box sx={{
            p: 5
          }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  lg: 60,
                  md: 40,
                  sm: 30,
                  xs: 30
                }
              }}>
              <ContentCutIcon
                sx={{
                  fontSize: "0.7em",
                  mr: 1.5,
                  mb: 0.5,
                  transform: "rotate(-90deg)",
                  verticalAlign: "middle"
                }}
              />
              policy.
            </Typography>
          </Box>
          <Box sx={{
            p: 5,
            textAlign: "left"
          }}>
            <Typography
              variant="h5">
              Tardiness Policy
            </Typography>

            <Typography
              variant="body1">
              No more that 10 minutes late or appointment will be canceled.
            </Typography>
          </Box>

          <Box sx={{
            p: 5,
            textAlign: "left"
          }}>
            <Typography
              variant="h5">
              No-Show Policy
            </Typography>

            <Typography
              variant="body1">
              No call no show will not be able to book again until missed appointment is paid.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  )
}