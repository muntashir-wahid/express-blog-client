import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Loader from "../../Pages/UI/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, isLoding } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoding) {
    return <Loader />;
  }

  if (!user) {
    navigate("/login");
    return;
  }

  return children;
};

export default PrivateRoute;
