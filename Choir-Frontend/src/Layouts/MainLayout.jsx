import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import "../Styles/Hero.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    
  
    </div>
  );
};

export default MainLayout;
