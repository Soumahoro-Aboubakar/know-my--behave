import React, { useEffect, useState } from "react";
import { FaCog, FaUserTie, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import "../style/sidebar.css";
import "../style/home.css";
import { FaCogs, FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useLocation } from "react-router-dom";


const Sidebar = ({ fromHeader = false , setOpenMenu = ()=> console.log("")
 }) => {
  const [active, setActive] = useState("Dashbord");
   useEffect(()=>{
     setActive(active)  //this line avoid navigation dashbord problem
   },[active])
  const menuItems = [
    { name: "Dashbord", icon: <MdSpaceDashboard /> , href :"#dashbord" },
    { name: "Profile", icon: <CgProfile /> , href : "#profile" },
    { name: "Logout", icon: <FaSignOutAlt /> , href : "#logout"  },
  ];
  return (
    <div
      className={`sidebar w-[${fromHeader ? "30vh" : "25vh"}] mt-[${
        fromHeader ? "-20px" : "15px"
      }] ${fromHeader && "bg-gray-400"}`}
    >
      <aside className="sidebar shadow-md flex flex-col w-[30vh]">
        {!fromHeader && (
          <h1 className="quote text-slate-700 text-center mb-6 border-b">
            Monitor. Analyze. Decide.{" "}
          </h1>
        )}
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => {
                e.stopPropagation(); // Prevent bubbling //this line avoid navigation dashbord problem
                setActive(item.name)
                setOpenMenu(false)
              }}
              className={`flex items-center w-full px-4 py-2 rounded-lg mb-3 text-left text-lg font-medium ${
                active === item.name
                  ? "bg-blue-500 text-white shadow-lg"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              <a href={item.href}>{item.name}</a>
            </button>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
