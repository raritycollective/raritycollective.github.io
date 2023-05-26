import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import { Appointments } from "../pages/appointments/Appointments";
import { Home } from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "appointments",
        element: <Appointments />
      }
    ]
  }
])