/* eslint-disable no-unused-vars */
import React from 'react';
import Body from './Body';
import { Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <div className="bg-[url('hero-image-wr.jpg')] z-[1]  bg-cover bg-center h-80 flex  items-center flex-col pt-20 relative">
      <img className='' src="Logo.svg" alt="" />
     <Outlet/>
    </div>
  ); 
};

export default Header;