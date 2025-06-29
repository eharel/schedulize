import { useContext } from "react";
import { UserContext } from "./userContext";

export function useUser() {
  const context = useContext(UserContext);
  if (context === null || context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
