import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../../Component/ErrorPages/ErrorPages";
import Login from "../../Component/Pages/Auth/Login/Login";
import NormalUserRegister from "../../Component/Pages/Auth/Signup/NormalUserRegister";
import UserType from "../../Component/Pages/Auth/Signup/userType";
import Home from "../../Component/Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import DonarSignup from "../../Component/Pages/Auth/Signup/DonarSignup";
import Donar from "../../Component/FindDonar/Donar";
import SingleDonar from "../../Component/FindDonar/SingleDonar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/userType",
        element: <UserType />,
      },
      {
        path:'/find-donar',
        element:<Donar/>
      }
      ,
      {
        path:'/singleDonar/:id',
        element:<SingleDonar/>
      }
    ],
  },
  {
    path:'signup',
    element:<NormalUserRegister></NormalUserRegister>,
    children:[
      
    ]
  }
  ,
  {
    path: "/bloodDonar-register",
    element: <DonarSignup />,
  },
  {
    path: "/normalUser-register",
    element: <NormalUserRegister />,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
export default router;
