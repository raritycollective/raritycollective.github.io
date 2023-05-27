import { Grid, List, ListItem, ListSubheader, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material"
import Box from "@mui/material/Box"

export const Contact = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10
        }}>
        <Grid
          container
          direction="column">
          <Grid 
            item
            sx={{
              p: 5
            }}>
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontSize: {
                  lg: 60,
                  md: 40,
                  sm: 30,
                  xs: 30
                }
              }}>
              cntact.
            </Typography>
          </Grid>

          <Grid container direction="row" justifyContent="space-evenly">
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h6"
                align="left"
                paddingLeft={2}>
                Contact information
              </Typography>
              <Table sx={{
                "td": {
                  paddingLeft: 2, 
                  paddingTop: .5,
                  paddingBottom: .5,
                  border: "none",
                  fontSize: 16
                }
              }}>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Phone:
                    </TableCell>
                    <TableCell>
                      (202) 519-3371
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Address:
                    </TableCell>
                    <TableCell>
                      12921 Fern St suite L, Garden Grove, CA 92841
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Email:
                    </TableCell>
                    <TableCell>
                      raritycollective44@gmail.com
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h6"
                align="left"
                paddingLeft={2}>
                Hours of operation
              </Typography>
              <Table sx={{
                "td": {
                  paddingLeft: 2, 
                  paddingTop: .5,
                  paddingBottom: .5,
                  border: "none",
                  fontSize: 16
                }
              }}>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      Mon:
                    </TableCell>
                    <TableCell>
                      Closed
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Tue:
                    </TableCell>
                    <TableCell>
                      9:00 AM - 1:00 PM
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Wed:
                    </TableCell>
                    <TableCell>
                      9:00 AM - 6:00 PM
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Thu:
                    </TableCell>
                    <TableCell>
                      9:00 AM - 6:00 PM
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Fri:
                    </TableCell>
                    <TableCell>
                      9:00 AM - 6:00 PM
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Sat:
                    </TableCell>
                    <TableCell>
                      8:00 AM - 2:00 PM
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Sun:
                    </TableCell>
                    <TableCell>
                      Closed
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h6"
                align="left"
                paddingLeft={2}>
                Directions
              </Typography>
              <List>
                <ListItem>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13265.848047825853!2d-117.9887582!3d33.7745655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd292b823d45b3%3A0xd6d3ff2084910a7a!2sRarity%20Collective!5e0!3m2!1sen!2sus!4v1685210422972!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}