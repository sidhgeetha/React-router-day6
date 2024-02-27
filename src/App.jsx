import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import FullStack from "./components/FullStack";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import All from "./components/All";
import data from "./data";
import LogoNavbar from "./components/LogoNavBar";

import TopContainer from "./components/TopContainer";



const App = () => {
  const fullStackDevelopment = data.filter(
    (item) => item.head === "Full Stack Development"
  );
  const dataScience = data.filter((item) => item.head === "Data Science");
  const cyberSecurity = data.filter((item) => item.head === "Cyber Security");
  const career = data.filter((item) => item.head === "Career");

  return (
    <BrowserRouter>
      <LogoNavbar />
      <Navbar />
    
     <TopContainer />
      <Routes>
        <Route path="/" element={<All data={data} />} />

        <Route
          path="/fullstack"
          element={<FullStack data={fullStackDevelopment} />}
        />
        <Route
          path="/datascience"
          element={<DataScience data={dataScience} />}
        />
        <Route
          path="/cybersecurity"
          element={<CyberSecurity data={cyberSecurity} />}
        />

        <Route path="/Career" element={<Career data={career} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
