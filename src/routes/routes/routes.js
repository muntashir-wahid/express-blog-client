import { createBrowserRouter } from "react-router-dom";
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
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
    ],
  },
]);

export default router;
