import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../components/layout/AppLayout";
import { Outlet } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Constraints from "../pages/Constraints";
import CalendarPage from "../pages/Calendar";
import SchedulePage from "../pages/Schedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout children={<Outlet />} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "constraints",
        element: <Constraints />,
      },
      {
        path: "calendar",
        element: <CalendarPage />,
      },
    ],
  },

  // Public routes
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
