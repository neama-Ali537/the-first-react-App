import React, { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import "./App.css";

// impotrant the Componant
import Layout from "./Componants/Layout/Layout";
import Home from "./Componants/Home/Home";
import Movies from "./Componants/Movies/Movies";
import Tv from "./Componants/Tv/Tv";
import People from "./Componants/People/People";
import Login from "./Componants/Login/Login";
import Register from "./Componants/Register/Register";
import About from "./Componants/About/About";
import Profile from "./Componants/Profile/Profile";
import ProtecedRoute from "./Componants/ProtecedRoute/ProtecedRoute";
import ItemDetails from "./Componants/ItemDetails/ItemDetails";
import { Offline } from "react-detect-offline";


import{AhthContext} from "./ConText/AhthContext"

export default function App() {
  // Function to handel USERDATA and Decoded the Token
let{userData , setUserData} =useContext(AhthContext)


 function saveUserData() {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);

  
    setUserData(decodedToken );
  }
  // function to stop empty yhe userData when i reload the page
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

 
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        {
          
          path: "home",
          element: (
            <ProtecedRoute userData={userData}>
              <Home />
            </ProtecedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtecedRoute userData={userData}>
              {" "}
              <Movies />
            </ProtecedRoute>
          ),
        },

        {
          path: "tv",
          element: (
            <ProtecedRoute userData={userData}>
              {" "}
              <Tv />{" "}
            </ProtecedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtecedRoute userData={userData}>
              <People />
            </ProtecedRoute>
          ),
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        {
          path: "about",
          element: (
            <ProtecedRoute userData={userData}>
              <About />
            </ProtecedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtecedRoute userData={userData}>
              <Profile saveUserData={saveUserData} />
            </ProtecedRoute>
          ),
        },
        {
          path: "itemDetails/:id/:media_type",
          element: (
            <ProtecedRoute userData={userData}>
            
               <ItemDetails saveUserData={saveUserData} />
             
            </ProtecedRoute>
          ),
        },

        { index: true, element: <Register /> },
      ],
    },
  ]);
  return (
    <>
      <Offline>
        <div className="offline">You Are Offline</div>
      </Offline>
   
        <RouterProvider router={routers} />
    
    </>
  );
}
