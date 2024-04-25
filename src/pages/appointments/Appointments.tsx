import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import InstagramIcon from '@mui/icons-material/Instagram';

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
      name: "Shelly",
      links: {
        booking: "http://Www.appointfix.com/cutzbyshellz",
        instagram: "https://www.instagram.com/Kutzby_shellz/",
        image: "/images/shelly.jpeg"
      }
    },
    {
      name: "Adrian",
      links: {
        booking: "https://agfadezz-108235.square.site/",
        instagram: "https://www.instagram.com/ag_fadezz",
        image: "/images/adrian.jpeg"
      }
    }
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
        <Grid
          container
          direction="column">
          <Grid item sx={{
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
              appntmnts.
            </Typography>
            <Typography
              variant="body1">
              <b>In addition to cash, we accept other forms of payment such as Zelle and Apple Pay</b>
            </Typography>
          </Grid>
          <Grid container direction="row" justifyContent="space-evenly" rowSpacing={2} columnSpacing={2}>
            {barbers.map((barber, index) => (
              <Grid item key={index} lg={3} md={6} sm={6} xs={12}>
                <Card sx={{ 
                  width: "100%",
                  bgcolor: "black", 
                  color: "white",
                  }}>
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
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10
        }}>
        <Grid
          container
          direction="column">

          <Grid item sx={{
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
              policy.
            </Typography>
          </Grid>
          <Grid item sx={{
            p: 5
          }} sm={12} textAlign="left">
            <Typography
              variant="h5">
              Tardiness Policy
            </Typography>

            <Typography
              variant="body1">
              No more that 10 minutes late or appointment will be canceled. 
            </Typography>
          </Grid>

          <Grid item sx={{
            p: 5
          }} sm={12} textAlign="left">
            <Typography
              variant="h5">
              No-Show Policy
            </Typography>

            <Typography
              variant="body1">
              No call no show will not be able to book again until missed appointment is paid.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}