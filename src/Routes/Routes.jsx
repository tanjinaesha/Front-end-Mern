import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Menu from "../Menu/Menu";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
              path:'/',
              element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        }
      ]
    },
  ]);