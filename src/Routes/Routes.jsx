import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Login from "../Pages/LogIn";
import Registion from "../Pages/Registration";
import AddCarft from "../Pages/AddCarft";
import AllCarft from "../Pages/AllCarft";
import MyCarft from "../Pages/MyCarft";
import Home from "../Pages/Home";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import CardDetails from "../Pages/CardDetails";
import UpdateItems from "../Components/UpdateItems";
import ErrorPage from "../Pages/ErrorPage";
import AllCategory from "../Components/AllCategory";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=>fetch("http://localhost:3000/craftitems")
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
        {
          path: "/registration",
          element:<Registion></Registion>,
        },
        {
          path: "/addcarft",
          element:<PrivetRoute>
            <AddCarft></AddCarft>
          </PrivetRoute>
        },
        {
          path: "/allcarft",
          element:<AllCarft></AllCarft>,
          loader: ()=>fetch("http://localhost:3000/craftitems")
        },
        {
          path: "/mycarft",
          element:<PrivetRoute><MyCarft></MyCarft></PrivetRoute>,
        },
        {
          path: "/allcategory",
          element:<AllCategory/>,
        },
        {
          path: "/update/:id",
          element:<UpdateItems></UpdateItems>,
        },
        {
          path: "/details/:id",
          element:<PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
        },
      ]
    },
  ]);