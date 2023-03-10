import { Signup } from "./components/user/Registration";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Fundraisers } from "./components/fundraiser/Fundraisers";
import { Donate } from "./components/Donate";
import { Dashboard } from "./components/user/Dashboard";
import { CreateFundraisers } from "./components/fundraiser/CreateFundraiser";
import { Settings } from "./components/user/Settings";

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
    path: '/create',
    element: <CreateFundraisers />
  },
  {
    path: '/u/settings',
    element: <Settings />
  }
];

export default AppRoutes;
