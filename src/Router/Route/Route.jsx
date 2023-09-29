import { createBrowserRouter } from "react-router-dom";
import SingleDonar from "../../Component/FindDonar/SingleDonar";
import Login from "../../Component/Pages/Auth/Login/Login";
import DonarSignup from "../../Component/Pages/Auth/Signup/DonarSignup";
import NormalUserRegister from "../../Component/Pages/Auth/Signup/NormalUserRegister";
import UserType from "../../Component/Pages/Auth/Signup/userType";
import AdminProfile from "../../Layout/Dashboard/Admin/AdminProfile";
import ManageUsers from "../../Layout/Dashboard/Admin/ManageUsers";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Address from "../../Layout/Dashboard/User/Address";
import ApplicationBlood from "../../Layout/Dashboard/User/ApplicationBlood";
import BecomeADonar from "../../Layout/Dashboard/User/BecomeADonar";
import DonarGallery from "../../Layout/Dashboard/User/DonarGallery";
import MyProfile from "../../Layout/Dashboard/User/MyProfile";
import RequestedBlood from "../../Layout/Dashboard/User/RequestedBlood";
import Main from "../../Layout/Main/Main";
import AboutPage from "../../Page/AboutPage";
import FindDonar from "../../Page/FindDonar";
import HomePage from "../../Page/HomePage";
import Contact from "../../Component/Contact/Contact";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Errorpage from "../../Component/Pages/Shared/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path:'/about',
        element:<AboutPage/>
      }
      ,
      {
        path:'/find-donar',
        element:<FindDonar/>
      }
      ,
      {
        path:'/singleDonar/:id',
        element:<PrivetRoute><SingleDonar/></PrivetRoute>
      }
      ,
      {
        path:'/contact',
        element:<Contact/>
      }
      ,
      {
        path: "/userType",
        element: <UserType />,
      },
    ],
  },
  {
    path:'signup',
    element:<NormalUserRegister></NormalUserRegister>,
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
    path:'/become-a-donar',
    element:<BecomeADonar/>
  }
  ,
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    errorElement:<Errorpage/>,
    children:[
      // Amdin routes start
      {
        path:'admin-profile',
        element:<AdminProfile/>
      }
      ,
      {
        path:'manage-users',
        element:<ManageUsers/>
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
        path:'requested-Blood',
        element:<RequestedBlood/>
       }
       ,
       {
        path:'gallery',
        element:<DonarGallery/>
       }
    ]
  }
]);
export default router;
