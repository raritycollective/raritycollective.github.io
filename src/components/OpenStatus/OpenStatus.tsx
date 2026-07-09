import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { formatHoursRange, getShopStatus } from "../../data/hours";

export const OpenStatus = () => {
  const [status, setStatus] = useState(() => getShopStatus());

  useEffect(() => {
    const intervalId = setInterval(() => setStatus(getShopStatus()), 60_000);
    return () => clearInterval(intervalId);
  }, []);

  const { isOpen, today } = status;

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        border: "1px solid #202020",
        borderRadius: 5,
        px: 2,
        py: 0.5,
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: isOpen ? "#2e7d32" : "#b1122d",
          flexShrink: 0,
        }}
      />
      <Typography variant="body2" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
        {isOpen ? "Open Now" : "Closed Now"}
        {" — "}
        <Typography component="span" variant="body2" sx={{ color: "text.secondary" }}>
          {today.label} {formatHoursRange(today)}
        </Typography>
      </Typography>
    </Box>
  );
};
