import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Pages/homePage.jsx";
import Schedule from "./Pages/Schedule.jsx";
import CommissionGrid from "./Pages/Commission.jsx";
import About from "./Pages/About.jsx";
import Members from "./DashboardComponents/Members.jsx";
import AddMembers from "./DashboardComponents/AddMembers.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="about" element={<About />} />
          <Route path="commissions" element={<CommissionGrid />} />

     
        </Route>
        <Route path="members" element={<Members />} />
        <Route path="Addmembers" element={<AddMembers />} />
      </Routes>
    </Router>
  );
};

export default App;
