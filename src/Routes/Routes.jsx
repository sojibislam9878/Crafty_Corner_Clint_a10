import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Login from "../Pages/LogIn";
import Registion from "../Pages/Registration";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
    },
    {
      path: "/login",
      element:<Login></Login>,
    },
    {
      path: "/registration",
      element:<Registion></Registion>,
    },
  ]);