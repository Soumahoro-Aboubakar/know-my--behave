import { useState } from "react";
import "../style/header.css";
import "../style/home.css";
import { FaSearch, FaUserCircle, FaArrowUp } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header-container  w-full px-8  z-50 top-0">
      <header className="flex justify-between  px-4 pb-3 bg-gray-800 text-white">
        {/* App name*/}
        <div className="flex items-center space-x-2">
          <FaUserCircle size={30} />
          <h1 className="text-sm md:text-2xl font-bold">RimCov</h1>
        </div>

        {/*Upgrade your plan section */}
        <div className=" items-center space-x-2 hidden lg:flex">
          <button className="flex items-center bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
            <FaArrowUp size={20} />
            <span className="ml-2">Upgrade Your Plan</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-gray-700 rounded-md px-4 py-2">
          <FaSearch size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        {/* user image */}
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-white">Brother Kid</span>
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="menu block lg:hidden">
          {openMenu ? (
            <button
              className="text-3xl font-extrabold text-red-700"
              onClick={() => setOpenMenu(false)}
            >
              <RiCloseLargeLine />
            </button>
          ) : (
            <button className="text-3xl" onClick={() => setOpenMenu(true)}>
              <MdMenu />
            </button>
          )}
        </div>
        {openMenu && <div className="menu block lg:hidden absolute top-16 right-4 px-2  z-10">{<Sidebar fromHeader={true}  setOpenMenu={setOpenMenu}/>}</div>}
      </header>
    </div>
  );
};

export default Header;
