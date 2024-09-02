import React from 'react';

import Navbar from '../Navbar/Navbar';
import Fotter from '../Footer/Fotter';
import { Outlet } from 'react-router-dom';
 function Layout() {
  return <>
 <Navbar/>
 <Outlet></Outlet>
 <Fotter />
  </>

  
}
export default Layout;
