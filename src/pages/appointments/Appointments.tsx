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
          background: "url(/images/rrty-clippers-grey.png)",
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
          <Grid container direction="row" justifyContent="space-around" rowSpacing={2}>
            <Grid item>
              <Card sx={{ 
                width: "100%",
                bgcolor: "black", 
                color: "white",
                }}>
                <CardHeader
                  title="James"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/images/lok1.png"
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
                    href="http://book.thecut.co/JamesM"
                    target="_blank"
                    color="secondary"
                    size="large"
                    variant="contained">Book your appointment</Button>
                </CardContent>
                <CardActions>
                  <IconButton
                    href="https://www.instagram.com/jamesmichel_/"
                    target="_blank"
                    sx={{
                      color: "white"
                    }}>
                    <InstagramIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card  sx={{ 
                width: "100%",
                bgcolor: "black", 
                color: "white",
                }}>
                <CardHeader
                  title="Anthony"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/images/loki2.png"
                  alt="Anthony"
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
                    href="http://raritycollective.booksy.com"
                    target="_blank"
                    color="secondary"
                    size="large"
                    variant="contained">Book your appointment</Button>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    href="https://www.instagram.com/Fcknbubba/"
                    target="_blank"
                    sx={{
                      color: "white"
                    }}>
                    <InstagramIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card  sx={{ 
                width: "100%",
                bgcolor: "black", 
                color: "white",
                }}>
                <CardHeader
                  title="Javier"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/images/luna1.png"
                  alt="Javier"
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
                    href="https://prsvr.setmore.com/"
                    target="_blank"
                    color="secondary"
                    size="large"
                    variant="contained">Book your appointment</Button>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    href="https://www.instagram.com/Javyroblesluna/"
                    target="_blank"
                    sx={{
                      color: "white"
                    }}>
                    <InstagramIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card  sx={{ 
                width: "100%",
                bgcolor: "black", 
                color: "white",
                }}>
                <CardHeader
                  title="Shelly"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="/images/loki3.png"
                  alt="Shelly"
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
                    href="http://Www.appointfix.com/cutzbyshellz"
                    target="_blank"
                    color="secondary"
                    size="large"
                    variant="contained">Book your appointment</Button>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    href="https://www.instagram.com/Kutzby_shellz/"
                    target="_blank"
                    sx={{
                      color: "white"
                    }}>
                    <InstagramIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}