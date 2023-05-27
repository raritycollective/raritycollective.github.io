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
        booking: "https://prsvr.setmore.com/",
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
          </Grid>
          <Grid container direction="row" justifyContent="space-evenly" rowSpacing={2}>
            {barbers.map((barber, index) => (
              <Grid item key={index}>
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
                    height="194"
                    image={barber.links.image}
                    alt="James"
                  />
                  <CardContent>
                    <Button style={{
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
                      href={barber.links.booking}
                      target="_blank"
                      color="secondary"
                      size="large"
                      variant="contained">Book your appointment</Button>
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
    </>
  )
}