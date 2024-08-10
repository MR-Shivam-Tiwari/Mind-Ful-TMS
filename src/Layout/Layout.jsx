// src/Component/Main/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Header/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
    </div>
  );
};

export default Layout;
