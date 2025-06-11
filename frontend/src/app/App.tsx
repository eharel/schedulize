// src/App.tsx
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "../context/Theme/ThemeProvider";
import { UserProvider } from "../context/User/UserProvider";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
