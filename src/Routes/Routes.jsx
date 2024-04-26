import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Login from "../Pages/LogIn";
import Registion from "../Pages/Registration";
import AddCarft from "../Pages/AddCarft";
import AllCarft from "../Pages/AllCarft";
import MyCarft from "../Pages/MyCarft";
import Home from "../Pages/Home";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
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
          element:<AddCarft></AddCarft>,
        },
        {
          path: "/allcarft",
          element:<AllCarft></AllCarft>,
        },
        {
          path: "/mycarft",
          element:<MyCarft></MyCarft>,
        },
      ]
    },
  ]);