import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notfound/NotFound";
import AllBooks from "../pages/allbooks/AllBooks";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import NewBook from "../pages/newbook/NewBook";
import BookDetails from "../pages/bookdetails/BookDetails";
import EditBook from "../pages/editbook/EditBook";
import RootPage from "./RootPage";
import PrivatesRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/newbook",
        element: (
          <PrivatesRoutes>
            <NewBook />
          </PrivatesRoutes>
        ),
      },
      {
        path: "/editbook/:id",
        element: (
          <PrivatesRoutes>
            <EditBook />
          </PrivatesRoutes>
        ),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/login",
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
