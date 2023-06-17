import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPages from "../../Component/ErrorPages/ErrorPages";
import Home from "../../Component/Pages/Home/Home";

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
          
        }
      ]
    },
  ]);
export default router;