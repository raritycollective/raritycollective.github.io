import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export const ErrorPage = () => {
  const [counter, setCounter] = useState(5);

  
  useEffect(() => {
    if (counter < 0) {
      window.location.href="/#/";
      return;
    }

    const intervalId = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: '100%',
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10
        }}>
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
            oops.
          </Typography>
          <Typography
            variant="body1">
            <b>Looks like you've navigated to a page that does not exist! Going back in {counter}...</b>
          </Typography>
        </Box>
      </Box>
    </>
  );
}