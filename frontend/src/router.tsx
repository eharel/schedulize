import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/layout/AppLayout";
import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import Login from "./pages/Login";
import Constraints from "./pages/Constraints";
import CalendarPage from "./pages/CalendarPage";

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
        element: <Schedule />,
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
