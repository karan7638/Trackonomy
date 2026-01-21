import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center gap-5 bg-white/80 border-b border-slate-200/60 backdrop-blur-xl py-3.5 px-8 sticky top-0 z-30 shadow-sm shadow-slate-900/5">
      <button
        className="block lg:hidden text-slate-900 p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <img src="/Trackonomy logo.png" alt="Trackonomy Logo" className="h-9 w-auto hover:opacity-80 transition-opacity cursor-pointer" onClick={() => window.location.href = '/dashboard'} />

      {openSideMenu && (
        <div className="fixed top-[61px] left-0 right-0 bottom-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setOpenSideMenu(false)}>
          <div className="absolute top-0 left-0 bg-white h-full w-72 shadow-2xl animate-in slide-in-from-left duration-300" onClick={(e) => e.stopPropagation()}>
            <SideMenu activeMenu={activeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
