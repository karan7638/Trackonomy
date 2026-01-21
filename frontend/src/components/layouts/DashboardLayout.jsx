import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex max-w-[1600px] mx-auto">
          <div className="hidden lg:block">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <main className="flex-1 p-4 md:p-8 lg:p-10 transition-all duration-300 overflow-hidden">
            {children}
          </main>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
