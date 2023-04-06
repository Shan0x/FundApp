import { Signup } from "./components/user/Registration";
import { Login } from "./components/user/Login";
import { Home } from "./components/Home";
import { Fundraisers } from "./components/fundraiser/Fundraisers";
import { Donate } from "./components/Donate";
import { UserDashboard } from "./components/user/UserDashboard";
import { CreateFundraisers } from "./components/fundraiser/CreateFundraiser";
import { Settings } from "./components/user/Settings";
import { ForgotPassword } from "./components/user/ForgotPassword";

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
    path: 'browse/fundraisers',
    element: <Fundraisers />
  },
  {
    path: '/donate',
    element: <Donate />
  },
  {
    path: '/u/home',
    element: <UserDashboard />
  },
  {
    path: '/u/create',
    element: <CreateFundraisers />
  },
  {
    path: '/u/settings',
    element: <Settings />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  }

];

export default AppRoutes;
