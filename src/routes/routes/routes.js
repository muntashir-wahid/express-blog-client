import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import UserBlogs from "../../Pages/UserBlogs/UserBlogs";
import WelcomePage from "../../Pages/WelcomePage/WelcomePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "blogs/:uid",
        element: (
          <PrivateRoute>
            <UserBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: "home/:uid",
        loader: () => fetch("http://localhost:5000/api/v1/blogs"),
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      { path: "profile/:uid", element: <h1>Welcome to profile</h1> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
    ],
  },
]);

export default router;
