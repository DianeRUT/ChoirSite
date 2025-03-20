import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Pages/homePage.jsx";
import Schedule from "./Pages/Schedule.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
