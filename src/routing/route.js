import HomePage from "../view/home/HomePage";
import SettingPage from "../view/settings/Settings";
import SignInPage from "../view/sign-in";

export const publicRoutes = [
  {
    to: "/login",
    element: <SignInPage />,
  },
  {
    to: "/home",
    element: <HomePage />,
  },
];

export const privateRoutes = [
  {
    label: "Home",
    role: ["Admin", "User"],
    Icon: "",
    to: "/home",
    element: <HomePage />,
  },
  {
    label: "Settings",
    role: ["Admin", "User"],
    Icon: "",
    to: "/setting",
    element: <SettingPage />,
  },
];
