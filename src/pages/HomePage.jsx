import React, { useEffect, useState } from "react";
import Header from "../features/home/components/Header";
import Sidebar from "../features/home/components/Sidebar";
import Histories from "../features/home/components/Histories";
import Dashboard from "../features/home/components/Dashboard";
import Profile from "../features/home/components/Profile";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {  
    const hash = location.hash;
    if (hash) {
      setActiveSection(hash);
    }
  }, [location.hash]);
  return (
    <div className="bg-white h-screen flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="w-full h-screen overflow-auto px-2">
        <Header />
        {activeSection === "#profile" && <Profile />}
        { activeSection !== "#profile" && <>
          <Histories />
          <Dashboard />
        </>}
      </div>
    </div>
  );
};

export default HomePage;
