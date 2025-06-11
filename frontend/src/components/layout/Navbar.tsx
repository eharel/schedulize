import Logo from "../shared/Logo";
import ToggleTheme from "../shared/ToggleTheme";
import UserIcon from "../shared/UserIcon";
import { useUser } from "../../context/User/useUser";
import Button from "../ui/Button";

export default function Navbar() {
  const { user } = useUser();

  const login = () => {
    console.log("Login");
  };

  return (
    <header className="h-16 flex items-center px-4 border-b">
      <Logo />
      {/* Move to the right */}
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <ToggleTheme />
        {user ? <UserIcon /> : <Button onClick={login}>Login</Button>}
      </div>
    </header>
  );
}
