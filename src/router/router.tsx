import {
  createHashRouter,
} from "react-router-dom";
import App from "../App";
import { Appointments } from "../pages/appointments/Appointments";
import { Home } from "../pages/home/Home";
import { Contact } from "../pages/contact/Contact";

export const router = createHashRouter([
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
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])