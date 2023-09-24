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
import Dashboard from "../../Layout/Dashboard/Dashboard";
import MyProfile from "../../Layout/Dashboard/User/MyProfile";
import Address from "../../Layout/Dashboard/User/Address";
import ApplicationBlood from "../../Layout/Dashboard/User/ApplicationBlood";
import RequestedBlood from "../../Layout/Dashboard/User/RequestedBlood";

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
  {
    path:'/dashboard',
    element:<Dashboard/>,
    errorElement:<>Error</>,
    children:[
      // Amdin routes start
      {
        path:'admin-home',
        element:<>Admin Home</>
      }
      ,
      {
        path:'manage-users',
        element:<>ManageUser</>
      },
      // Admin routes End

      // User routes Start
      {
        path:'my-profile',
        element:<MyProfile/>
      }
      ,
      {
        path:"address",
        element:<Address/>
      }
      ,
      {
        path:'application-blood',
        element: <ApplicationBlood/>
       }
       ,
       {
        path:'Requested-Blood',
        element:<RequestedBlood/>
       }
    ]
  }
]);
export default router;
