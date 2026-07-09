import Box from "@mui/material/Box";
import "./BarberPoleStripe.css";

export interface BarberPoleStripeProps {
  height?: number;
}

export const BarberPoleStripe = ({ height = 6 }: BarberPoleStripeProps) => (
  <Box
    className="barber-pole-stripe"
    sx={{ height, width: "100%" }}
  />
);
