import { createContext } from "react";
import type { User } from "../../types";

export type UserContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType | null>(null);
