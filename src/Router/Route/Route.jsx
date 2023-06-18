import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPages from "../../Component/ErrorPages/ErrorPages";
import Home from "../../Component/Pages/Home/Home";
import Signup from "../../Component/Pages/Auth/Signup/Signup";
import Login from "../../Component/Pages/Auth/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPages></ErrorPages>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
    
  ]);
export default router;