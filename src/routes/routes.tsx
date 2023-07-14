import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notfound/NotFound";
import AllBooks from "../pages/allbooks/AllBooks";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
