import { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import WelcomePage from "../../Pages/WelcomePage/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "blogs/:uid", element: <h1>Welcome to Blog</h1> },
      { path: "home/:uid", element: <h1>Welcome to Home</h1> },
      { path: "profile/:uid", element: <h1>Welcome to profile</h1> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
    ],
  },
]);

export default router;
