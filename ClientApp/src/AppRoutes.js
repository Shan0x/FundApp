import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Fundraisers } from "./components/Fundraisers";
import { Donate } from "./components/Donate";
import { Dashboard } from "./components/user/Dashboard";
import { AccountSettings } from "./components/user/AccountSettings";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/fundraisers',
    element: <Fundraisers />
  },
  {
    path: '/donate',
    element: <Donate />
  },
  {
    path: '/u/home',
    element: <Dashboard />
  },
  {
    path: '/u/settings',
    element: <AccountSettings />


    }
];

export default AppRoutes;
