import { Link, useLocation } from "react-router-dom";
import {
  CalendarDays,
  LayoutGrid,
  ChevronRight,
  Settings,
  ListTodo,
} from "lucide-react";
import { useTheme } from "../../context/Theme/useTheme";
import { Theme } from "../../types";
import Logo from "../shared/Logo";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

function NavItem({ to, icon, label, isActive }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-colors ${
        isActive
          ? "bg-primary-500 text-white dark:bg-primary-600"
          : "text-surface-600 hover:bg-primary-50 dark:text-surface-300 dark:hover:bg-primary-900"
      }`}
    >
      <span className="text-lg">{icon}</span>
      <span className="flex-grow">{label}</span>
      {isActive && <ChevronRight size={16} />}
    </Link>
  );
}

export default function Sidebar() {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === Theme.Dark;

  const navItems = [
    {
      to: "/",
      icon: <LayoutGrid size={18} />,
      label: "Dashboard",
    },
    {
      to: "/calendar",
      icon: <CalendarDays size={18} />,
      label: "Calendar",
    },
    {
      to: "/schedule",
      icon: <ListTodo size={18} />,
      label: "Schedule",
    },
    {
      to: "/constraints",
      icon: <Settings size={18} />,
      label: "Constraints",
    },
  ];

  return (
    <nav
      className={`w-64 h-screen border-r ${
        isDark
          ? "border-surface-700 bg-surface-900"
          : "border-surface-200 bg-surface-50"
      } py-6 px-4 flex flex-col`}
    >
      <div className="mb-8 px-2 flex items-center">
        <Logo />
      </div>

      <div className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={
              location.pathname === item.to ||
              (item.to !== "/" && location.pathname.startsWith(item.to))
            }
          />
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-surface-200 dark:border-surface-700">
        <div className="text-xs text-surface-500 dark:text-surface-400 mb-2 px-4">
          User
        </div>
        <Link
          to="/login"
          className="flex items-center gap-2 py-2 px-4 rounded-lg text-surface-600 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-200">
            {/* Display user initials or icon */}
            <span>G</span>
          </div>
          <div className="flex-grow">
            <div className="text-sm font-medium">Guest User</div>
            <div className="text-xs text-surface-500 dark:text-surface-400">
              Log in
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
