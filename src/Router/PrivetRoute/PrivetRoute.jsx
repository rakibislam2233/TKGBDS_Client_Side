
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Provider/AuthProvider/AuthProvider";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="w-full h-80 flex justify-center items-center">
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivetRoute;
