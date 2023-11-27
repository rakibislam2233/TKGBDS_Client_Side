/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Provider/AuthProvider/AuthProvider";
import Loading from "../../Component/Pages/Shared/Loading";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return <Loading/>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivetRoute;
