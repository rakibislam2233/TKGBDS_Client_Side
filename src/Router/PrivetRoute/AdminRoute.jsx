
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../../hook/UseUser";
import Loading from "../../Component/Pages/Shared/Loading";
import useAdmin from "../../hook/useAdmin";
// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const [ user, loading ] = useUser()
  const [isAdmin,isLoading] = useAdmin();
  console.log(isAdmin)
  const location = useLocation();
  if (loading || isLoading) {
    return <Loading/>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;
