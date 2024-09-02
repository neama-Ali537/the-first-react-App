import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Componants/Layout/Layout";
import Home from "./Componants/Home/Home";
import Movies from "./Componants/Movies/Movies";
import Tv from "./Componants/Tv/Tv";
import People from "./Componants/People/People";
import Login from "./Componants/Login/Login";
import Register from "./Componants/Register/Register";
import About from "./Componants/About/About"
let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "tv", element: <Tv /> },
      { path: "people", element: <People /> },
      { path: "login", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "about", element: <About /> },
      {index :true, element: <Register /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routers} />;
}
